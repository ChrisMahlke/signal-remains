import {Box, IconButton, Fade, Typography, Tooltip} from '@mui/material';
import {
  APIProvider,
  Map as GoogleMap,
} from '@vis.gl/react-google-maps';
import {Info, Palette, Home} from 'lucide-react';
import React, {useCallback, useState, useMemo, useEffect, useRef, Suspense} from 'react';

import {tours} from '../data/tours';
import {useAppSelector} from '../hooks/useRedux';
import {useURLState} from '../hooks/useURLState';

// Lazy load heavy components for better performance
const CartographyInfoModal = React.lazy(() => import('./CartographyInfoModal'));
const ContentPanel = React.lazy(() => import('./ContentPanel'));
const MapDesignOverlay = React.lazy(() => import('./MapDesignOverlay'));
const MapMarkers = React.lazy(() => import('./MapMarkers'));

import type {Concert} from '../lib/groupConcerts';
import type {MarkerStyle} from '../types/tour';
import type {
  MapCameraProps,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';

interface LayoutProps {
  onHomeClick?: () => void;
}

const INITIAL_CAMERA_STATE: MapCameraProps = {
  center: {lat: 0, lng: 0},
  zoom: 3,
  heading: 0,
  tilt: 0,
};

const Layout: React.FC<LayoutProps> = ({onHomeClick}) => {
  const {currentStep} = useAppSelector((state) => state.navigation);
  const {updateURL} = useURLState();
  const {parseURLState} = useURLState();

  const [selectedConcerts, setSelectedConcerts] = useState<Concert[]>([]);
  const [selectedConcert, setSelectedConcert] = useState<Concert | null>(null);
  const [currentMapId, setCurrentMapId] = useState<string>(
    '11a94722049cf825220c1246',
  );
  const [currentMarkerStyle, setCurrentMarkerStyle] =
    useState<MarkerStyle | null>(null);
  const [cameraState, setCameraState] =
    useState<MapCameraProps>(INITIAL_CAMERA_STATE);

  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [expandedLeg, setExpandedLeg] = useState<number | null>(null);
  const [isMapLoading, setIsMapLoading] = useState(false);
  const loadingTimeoutRef = useRef<number | null>(null);

  const currentTourData = useMemo(() => {
    return tours.find((t) => t.step === currentStep);
  }, [currentStep]);

  // Track if the design overlay was previously visible
  const [wasDesignOverlayVisible, setWasDesignOverlayVisible] = useState(false);

  // Auto-show design overlay when leg is selected (only if it was previously visible)
  const [autoDesignOverlay, setAutoDesignOverlay] = useState<{
    tour: string;
    leg: number;
  } | null>(null);

  // Update auto design overlay when expandedLeg changes
  useEffect(() => {
    if (expandedLeg && currentTourData && wasDesignOverlayVisible) {
      setAutoDesignOverlay({
        tour: currentTourData.tour,
        leg: expandedLeg,
      });
    } else if (!expandedLeg) {
      setAutoDesignOverlay(null);
    }
  }, [expandedLeg, currentTourData, wasDesignOverlayVisible]);

  // Update URL when tour or leg changes
  useEffect(() => {
    if (currentTourData) {
      updateURL(currentTourData.tour, expandedLeg ?? undefined);
    }
  }, [currentStep, expandedLeg, currentTourData, updateURL]);

  // Reset design overlay visibility when tour changes
  useEffect(() => {
    setWasDesignOverlayVisible(false);
    setAutoDesignOverlay(null);
  }, [currentStep]);

  const handleConcertsSelected = useCallback((concerts: Concert[]) => {
    setSelectedConcerts(concerts);
  }, []);

  const handleMapIdChange = useCallback((mapId: string) => {
    setCurrentMapId(mapId);
    setIsMapLoading(true);

    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    // Set a minimum loading time of 1 second
    const timeout = window.setTimeout(() => {
      setIsMapLoading(false);
      loadingTimeoutRef.current = null;
    }, 1000);

    loadingTimeoutRef.current = timeout;
  }, []);

  const handleConcertSelect = useCallback((concert: Concert | null) => {
    setSelectedConcert(concert);
  }, []);

  const handleMarkerStyleChange = useCallback((style: MarkerStyle) => {
    setCurrentMarkerStyle(style);
  }, []);

  const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
    setCameraState(ev.detail);
  }, []);

  const handleMapTilesLoaded = useCallback(() => {
    // Clear the timeout and hide loading immediately
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }
    setIsMapLoading(false);
  }, []);

  const handleZoomToLocation = useCallback(
    (lat: number, lng: number, zoom = 12) => {
      setCameraState({
        center: {lat, lng},
        zoom,
        heading: 0,
        tilt: 0,
      });
    },
    [],
  );

  const handleOpenInfoModal = (): void => setIsInfoModalOpen(true);
  const handleCloseInfoModal = (): void => setIsInfoModalOpen(false);

  const handleDesignOverlayClose = (): void => {
    setAutoDesignOverlay(null);
    setWasDesignOverlayVisible(false);
  };

  const handleManualDesignOverlayOpen = (): void => {
    if (currentTourData?.legs?.length) {
      const targetLeg = currentTourData.legs.find(
        (l) => l.legNumber === expandedLeg,
      )?.legNumber ?? currentTourData.legs[0].legNumber;

      setAutoDesignOverlay({
        tour: currentTourData.tour,
        leg: targetLeg,
      });
      setWasDesignOverlayVisible(true);
    }
  };

  // Parse URL state on mount
  useEffect(() => {
    const urlState = parseURLState();
    if (urlState.tour && urlState.leg) {
      setExpandedLeg(urlState.leg);
    }
  }, [parseURLState]);

  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string | null>(null);
  useEffect(() => {
    const fetchApiKey = async (): Promise<void> => {
      try {
        const res = await fetch('/api/config');
        const data = await res.json() as Record<string, unknown>;
        const apiKey = typeof data.googleMapsApiKey === 'string' ? data.googleMapsApiKey : null;
        setGoogleMapsApiKey(apiKey);
      } catch {
        // Debug: Failed to fetch key - can be enabled for debugging
        // console.error('Failed to fetch Google Maps API key:', err);
        setGoogleMapsApiKey(null);
      }
    };
    void fetchApiKey();
  }, []);

  return (
    <Box
      aria-label="U2 Concert Tour Application"
      component="main"
      id="main-content"
      role="main"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Map Container */}
      <Box
        aria-label="Interactive map showing concert locations"
        component="section"
        id="map"
        sx={{
          height: {xs: '80vh', md: '100vh'},
          width: {xs: '100%', md: '65%'},
          position: 'relative',
          order: {xs: 1, md: 1},
          overflow: 'hidden',
        }}
      >
        {/* Map Controls */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 4,
            display: 'flex',
            gap: 1,
          }}
        >
          {/* Home Button */}
          {onHomeClick && (
            <Tooltip
              arrow
              placement="left"
              title="Return to home screen"
            >
              <IconButton
                aria-label="Return to home screen"
                sx={{
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'divider',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'background.paper',
                    borderColor: 'primary.main',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                  },
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor: 'primary.main',
                    outlineOffset: '2px',
                  },
                  '&:active': {
                    boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                  },
                }}
                onClick={onHomeClick}
              >
                <Home size={20} />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip
            arrow
            placement="left"
            title={expandedLeg ? 'View map design details' : 'Select a leg to view map design'}
          >
            <span style={{display: 'inline-block'}}>
              <IconButton
                aria-label={expandedLeg ? 'View current map design for current tour' : 'Select a leg to view map design'}
                disabled={!expandedLeg}
                sx={(theme) => ({
                  backgroundColor: theme.palette.background.paper,
                  border: '2px solid',
                  borderColor: theme.palette.divider,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: theme.palette.background.paper,
                    borderColor: expandedLeg ? theme.palette.primary.main : theme.palette.divider,
                    boxShadow: expandedLeg ? '0 6px 16px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.15)',
                  },
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor: theme.palette.primary.main,
                    outlineOffset: '2px',
                  },
                  '&:disabled': {
                    backgroundColor: theme.palette.background.paper,
                    border: '2px solid',
                    borderColor: theme.palette.divider,
                    opacity: 1,
                    cursor: 'not-allowed',
                  },
                  '& .MuiSvgIcon-root, & svg': {
                    opacity: !expandedLeg ? 0.5 : 1,
                  },
                  '&:active': {
                    boxShadow: expandedLeg ? '0 2px 8px rgba(0,0,0,0.18)' : '0 4px 12px rgba(0,0,0,0.15)',
                  },
                })}
                onClick={handleManualDesignOverlayOpen}
              >
                <Palette size={20} />
              </IconButton>
            </span>
          </Tooltip>

          <Tooltip
            arrow
            placement="left"
            title="View project information and cartography details"
          >
            <IconButton
              aria-label="View project information and cartography details"
              sx={{
                backgroundColor: 'background.paper',
                border: '2px solid',
                borderColor: 'divider',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'background.paper',
                  borderColor: 'primary.main',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: '2px',
                },
                '&:active': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                },
              }}
              onClick={handleOpenInfoModal}
            >
              <Info size={20} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Map Loading Overlay */}
        <Fade in={isMapLoading} timeout={300}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              pointerEvents: 'auto',
              background: 'rgba(30,30,40,0.35)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box
              sx={{
                minWidth: 340,
                maxWidth: 420,
                px: 4,
                py: 5,
                borderRadius: 5,
                boxShadow: 8,
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(25,25,35,0.92)'
                    : 'rgba(255,255,255,0.92)',
                border: (theme) =>
                  `1.5px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Animated Glowing Map Pin */}
              <Box
                sx={{
                  mb: 3,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 64,
                    height: 64,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    background: (theme) =>
                      `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
                    filter: 'blur(12px)',
                    opacity: 0.7,
                    animation: 'glowPulse 2s infinite alternate',
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <svg fill="none" height="48" viewBox="0 0 24 24" width="48">
                    <defs>
                      <radialGradient cx="50%" cy="50%" id="pinGradient" r="80%">
                        <stop offset="0%" stopColor="#ff9800" />
                        <stop offset="100%" stopColor="#1976d2" />
                      </radialGradient>
                    </defs>
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.25 12 7.25 12s7.25-6.75 7.25-12c0-4.42-3.58-8-8-8zm0 13.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="url(#pinGradient)" />
                    <circle cx="12" cy="10" fill="#fff" fillOpacity="0.8" r="2.5" />
                  </svg>
                </Box>
              </Box>

              {/* Elegant Apple/Don Norman-inspired Loading Overlay */}
              <Typography
                sx={{
                  fontWeight: 300,
                  letterSpacing: 2,
                  textAlign: 'center',
                  color: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.96)'
                      : 'rgba(25,25,40,0.96)',
                  mb: 0.5,
                  mt: 0.5,
                  fontSize: {xs: '1.4rem', md: '1.8rem'},
                  lineHeight: 1.2,
                  fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', sans-serif',
                }}
                variant="h4"
              >
                {currentTourData ? currentTourData.title : 'Preparing Your Journey'}
              </Typography>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.7)'
                      : 'rgba(25,25,40,0.7)',
                  fontWeight: 400,
                  textAlign: 'center',
                  letterSpacing: 0.8,
                  fontSize: {xs: '0.95rem', md: '1.05rem'},
                  mb: 1,
                  opacity: 0.8,
                  fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', sans-serif',
                }}
                variant="subtitle1"
              >
                {currentTourData ? currentTourData.period : 'Mapping U2’s musical odyssey'}
              </Typography>
              {expandedLeg && currentTourData && (
                <Typography
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.6)'
                        : 'rgba(25,25,40,0.6)',
                    fontWeight: 500,
                    textAlign: 'center',
                    letterSpacing: 0.5,
                    fontSize: {xs: '0.85rem', md: '0.95rem'},
                    mb: 3,
                    opacity: 0.9,
                    fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', sans-serif',
                  }}
                  variant="body2"
                >
                  Leg {expandedLeg}
                </Typography>
              )}
              {/* Minimal Progress Indicator */}
              <Box
                sx={{
                  width: '100%',
                  height: 2,
                  borderRadius: 1,
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.10)'
                      : 'rgba(0,0,0,0.10)',
                  overflow: 'hidden',
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: '60%',
                    height: '100%',
                    borderRadius: 1,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.7)'
                        : 'rgba(25,25,40,0.7)',
                    animation: 'progressSlide 1.5s ease-in-out infinite',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Fade>

        {googleMapsApiKey && (
          <APIProvider apiKey={googleMapsApiKey}>
            <GoogleMap
              disableDefaultUI
              center={cameraState.center}
              gestureHandling="greedy"
              heading={cameraState.heading}
              mapId={currentMapId}
              style={{width: '100%', height: '100%'}}
              tilt={cameraState.tilt}
              zoom={cameraState.zoom}
              onCameraChanged={handleCameraChange}
              onTilesLoaded={handleMapTilesLoaded}
            >
              <Suspense fallback={null}>
                <MapMarkers
                  concerts={selectedConcerts}
                  currentMarkerStyle={currentMarkerStyle}
                  selectedConcert={selectedConcert}
                />
              </Suspense>
            </GoogleMap>
          </APIProvider>
        )}

        {/* Auto Design Overlay (when leg is selected) */}
        <Fade in={!!autoDesignOverlay} timeout={300}>
          <Box>
            {autoDesignOverlay && (
              <Suspense fallback={null}>
                <MapDesignOverlay
                  leg={autoDesignOverlay.leg}
                  tour={autoDesignOverlay.tour}
                  onClose={handleDesignOverlayClose}
                />
              </Suspense>
            )}
          </Box>
        </Fade>

      </Box>

      {/* Content Panel */}
      <Box
        aria-label="Concert tour information and navigation"
        component="aside"
        id="content-panel"
        sx={{
          height: {xs: 'auto', md: '100vh'},
          width: {xs: '100%', md: '35%'},
          order: {xs: 2, md: 2},
          overflow: 'hidden',
          zIndex: {xs: 15, md: 1},
          position: {xs: 'relative', md: 'static'},
        }}
      >
        <Suspense fallback={null}>
          <ContentPanel
            expandedLeg={expandedLeg}
            onConcertHover={handleConcertSelect}
            onConcertSelect={handleConcertSelect}
            onConcertsSelected={handleConcertsSelected}
            onLegChange={setExpandedLeg}
            onMapIdChange={handleMapIdChange}
            onMarkerStyleChange={handleMarkerStyleChange}
            onZoomToLocation={handleZoomToLocation}
          />
        </Suspense>
      </Box>

      {/* Modals */}
      <Suspense fallback={null}>
        <CartographyInfoModal
          open={isInfoModalOpen}
          onClose={handleCloseInfoModal}
        />
      </Suspense>

    </Box>
  );
};

export default Layout;
