// src/components/MapDesignOverlay.tsx
import {Box, Typography, IconButton, useTheme, Chip, Divider, Tooltip, Snackbar} from '@mui/material';
import {X, Palette, MapPin, Layers, Info, Copy, Minimize2, Maximize2} from 'lucide-react';
import React, {useState, useEffect} from 'react';

import {mapStyleInsights} from '../data/mapStyleInsights';
import {tours} from '../data/tours';
import {getGroupedConcerts} from '../lib/groupConcerts';

import MapStyleInsightCard from './MapStyleInsightCard';

import type {FilterOptions} from '../lib/groupConcerts';

interface MapDesignOverlayProps {
  tour: string;
  leg: number;
  onClose: () => void;
}

const MapDesignOverlay: React.FC<MapDesignOverlayProps> = ({
  tour,
  leg,
  onClose,
}) => {
  const theme = useTheme();
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [staticMapUrl, setStaticMapUrl] = useState<string>('');
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string | null>(null);

  const insight = mapStyleInsights.find(
    (i) => i.tour === tour && i.legNumber === leg,
  );

  // Fetch the API key once on mount
  useEffect(() => {
    const fetchKey = async (): Promise<void> => {
      try {
        const response = await fetch('/api/config');
        const data = await response.json() as Record<string, unknown>;
        const apiKey = typeof data.googleMapsApiKey === 'string' ? data.googleMapsApiKey : null;
        setGoogleMapsApiKey(apiKey);
      } catch {
        // Debug: Failed to fetch key - can be enabled for debugging
        // console.error('Failed to fetch Google Maps API key:', err);
        setGoogleMapsApiKey(null);
      }
    };

    void fetchKey();
  }, []);

  // Get tour data and generate static map
  useEffect(() => {
    const generateStaticMap = async (): Promise<void> => {
      if (!googleMapsApiKey) return;

      try {
        const filters: FilterOptions = {includeTours: [tour]};
        const groupedConcerts = await getGroupedConcerts(filters);
        // eslint-disable-next-line security/detect-object-injection
        const legConcerts = groupedConcerts[tour]?.[leg.toString()] ?? [];

        if (legConcerts.length > 0) {
          // Calculate bounds for the static map
          const bounds = legConcerts.reduce(
            (acc, concert) => {
              acc.minLat = Math.min(acc.minLat, concert.lat);
              acc.maxLat = Math.max(acc.maxLat, concert.lat);
              acc.minLng = Math.min(acc.minLng, concert.lng);
              acc.maxLng = Math.max(acc.maxLng, concert.lng);
              return acc;
            },
            {minLat: 90, maxLat: -90, minLng: 180, maxLng: -180},
          );

          const centerLat = (bounds.minLat + bounds.maxLat) / 2;
          const centerLng = (bounds.minLng + bounds.maxLng) / 2;

          const zoom = Math.min(
            15,
            Math.max(
              3,
              Math.floor(
                360 / Math.max(bounds.maxLat - bounds.minLat, bounds.maxLng - bounds.minLng),
              ),
            ),
          );

          // Get tour data for map ID
          const tourData = tours.find(t => t.tour === tour);
          const mapId = tourData?.legs?.find(l => l.legNumber === leg)?.mapId ?? tourData?.tourMapId ?? '11a94722049cf825220c1246';

          // Generate static map URL without markers
          const url = 'https://maps.googleapis.com/maps/api/staticmap?' +
            `center=${centerLat},${centerLng}&` +
            `zoom=${zoom}&` +
            'size=400x200&' +
            'maptype=roadmap&' +
            `map_id=${mapId}&` +
            `key=${googleMapsApiKey}`;

          setStaticMapUrl(url);
        }
      } catch {
        // Debug: Failed to generate static map - can be enabled for debugging
        // console.error('Failed to generate static map:', error);
      }
    };

    void generateStaticMap();
  }, [tour, leg, googleMapsApiKey]);

  if (!insight) return null;

  // Theme-aware colors with enhanced contrast and accessibility
  const isDark = theme.palette.mode === 'dark';
  const overlayBg = isDark
    ? 'rgba(25, 25, 35, 0.98)'
    : 'rgba(255, 255, 255, 0.98)';
  const headerBg = isDark
    ? 'rgba(40, 40, 50, 0.95)'
    : 'rgba(250, 250, 255, 0.95)';
  const contentBg = isDark
    ? 'rgba(30, 30, 40, 0.8)'
    : 'rgba(255, 255, 255, 0.8)';
  const borderColor = isDark
    ? 'rgba(255, 255, 255, 0.15)'
    : 'rgba(0, 0, 0, 0.08)';
  const headerBorderColor = isDark
    ? 'rgba(255, 255, 255, 0.12)'
    : 'rgba(0, 0, 0, 0.06)';
  const accentColor = isDark ? 'rgba(156, 39, 176, 0.2)' : 'rgba(156, 39, 176, 0.1)';

  const handleClose = (): void => {
    onClose();
  };

  const handleMinimize = (): void => {
    setIsMinimized(!isMinimized);
  };

  const handleCopyDesignInfo = async (): Promise<void> => {
    const designInfo = `Tour: ${tour}\nLeg: ${leg}\nTheme: ${insight.themeName}\n\nDesign Summary:\n${insight.visualSummary}\n\nDesign Elements:\n${insight.rationale.map(item => `• ${item.label}: ${item.meaning}`).join('\n')}`;

    try {
      await navigator.clipboard.writeText(designInfo);
      setShowCopySuccess(true);
    } catch {
      // Debug: Failed to copy design info - can be enabled for debugging
      // console.error('Failed to copy design info:', err);
    }
  };

  const handleCopySuccessClose = (): void => {
    setShowCopySuccess(false);
  };

  return (
    <>
      <Box
        aria-label={`Cartographic design analysis for ${tour} leg ${leg}`}
        role="dialog"
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          width: {xs: 'calc(100% - 32px)', sm: isMinimized ? 200 : 400},
          maxHeight: isMinimized ? 'auto' : 'calc(100vh - 50px)',
          zIndex: 10,
          bgcolor: overlayBg,
          backdropFilter: 'blur(12px)',
          borderRadius: 4,
          boxShadow: isDark
            ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(0, 0, 0, 0.3)'
            : '0 12px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.1)',
          border: `1px solid ${borderColor}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          // Enhanced affordance: subtle glow on hover
          '&:hover': {
            boxShadow: isDark
              ? '0 16px 48px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.4)'
              : '0 16px 48px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {/* Enhanced Header with Better Visual Hierarchy */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            pb: 2,
            flexShrink: 0,
            borderBottom: `1px solid ${headerBorderColor}`,
            backgroundColor: headerBg,
            position: 'relative',
            // Subtle gradient for depth
            background: isDark
              ? `linear-gradient(135deg, ${headerBg} 0%, rgba(35, 35, 45, 0.95) 100%)`
              : `linear-gradient(135deg, ${headerBg} 0%, rgba(245, 245, 250, 0.95) 100%)`,
          }}
        >
          {/* Enhanced Control Buttons */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 2,
              display: 'flex',
              gap: 0.5,
            }}
          >
            <Tooltip title="Copy design information">
              <IconButton
                aria-label="Copy design information"
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${borderColor}`,
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(0, 0, 0, 0.06)',
                    transform: 'scale(1.05)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                }}
                onClick={() => {
                  void handleCopyDesignInfo();
                }}
              >
                <Copy size={14} />
              </IconButton>
            </Tooltip>

            <Tooltip title={isMinimized ? 'Expand panel' : 'Minimize panel'}>
              <IconButton
                aria-label={isMinimized ? 'Expand panel' : 'Minimize panel'}
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${borderColor}`,
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(0, 0, 0, 0.06)',
                    transform: 'scale(1.05)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                }}
                onClick={handleMinimize}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Close panel">
              <IconButton
                aria-label="Close cartographic design panel"
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${borderColor}`,
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.15)'
                      : 'rgba(0, 0, 0, 0.08)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor: 'primary.main',
                    outlineOffset: '2px',
                  },
                }}
                onClick={handleClose}
              >
                <X size={16} />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Enhanced Title Section with Visual Hierarchy */}
          <Box sx={{pr: 12}}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: accentColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${borderColor}`,
                  backdropFilter: 'blur(4px)',
                }}
              >
                <Palette color={theme.palette.primary.main} size={20} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${
                      theme.palette.primary.main
                    } 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 0.5,
                  }}
                  variant="h6"
                >
                  {tour}
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                  variant="body2"
                >
                  <MapPin size={14} />
                  Leg {leg} • Cartographic Design
                </Typography>
              </Box>
            </Box>

            {/* Enhanced Status Indicators */}
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                mt: 2,
              }}
            >
              <Chip
                icon={<Layers size={14} />}
                label="Map Style Analysis"
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  fontWeight: 600,
                  '& .MuiChip-icon': {
                    color: 'white',
                  },
                }}
              />
              <Chip
                icon={<Info size={14} />}
                label="Design Insights"
                size="small"
                sx={{
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                  '& .MuiChip-icon': {
                    color: theme.palette.secondary.main,
                  },
                }}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>

        {/* Enhanced Content Area with Better Spacing - Only show when not minimized */}
        {!isMinimized && (
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              overflowX: 'hidden',
              px: 0,
              py: 0,
              pb: staticMapUrl ? '220px' : 0, // Add padding to account for fixed map
              backgroundColor: contentBg,
              // Subtle scrollbar styling
              '&::-webkit-scrollbar': {
                width: 6,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                },
              },
            }}
          >
            {/* Enhanced Divider for Visual Separation */}
            <Divider
              sx={{
                mb: 0,
                borderColor: headerBorderColor,
                opacity: 0.6,
              }}
            />

            <MapStyleInsightCard insight={insight} />
          </Box>
        )}

        {/* Fixed Static Map Preview - Outside of scrollable content */}
        {!isMinimized && staticMapUrl && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 2,
              backgroundColor: contentBg,
              borderTop: `1px solid ${headerBorderColor}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography
              sx={{mb: 1, fontWeight: 600, color: 'text.secondary'}}
              variant="body2"
            >
              Map Style Preview
            </Typography>
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <img
                alt={`Static map preview for ${tour} leg ${leg}`}
                src={staticMapUrl}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        )}
      </Box>

      {/* Success Notification */}
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        autoHideDuration={3000}
        message="Design information copied to clipboard"
        open={showCopySuccess}
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
          },
        }}
        onClose={handleCopySuccessClose}
      />
    </>
  );
};

export default MapDesignOverlay;
