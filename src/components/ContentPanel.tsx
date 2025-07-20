import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from '@mui/material';
import {ChevronDown} from 'lucide-react';
import React, {useEffect, useState, useMemo, useCallback} from 'react';

import {mapStyleInsights} from '../data/mapStyleInsights';
import {tours} from '../data/tours';
import {useAccessibility} from '../hooks/useAccessibility';
import {useAppSelector} from '../hooks/useRedux';
import {useURLState} from '../hooks/useURLState';
import {
  getGroupedConcerts,
} from '../lib/groupConcerts';
import {validateApiResponse} from '../lib/validation';

import AccessibilityControls from './AccessibilityControls';
import LegCard from './LegCard';
import MapStyleInsightCard from './MapStyleInsightCard';
import NavigationComponent from './NavigationComponent';

import type {
  Concert,
  FilterOptions,
  GroupedConcerts,
} from '../lib/groupConcerts';
import type {MarkerStyle} from '../types/tour';

const ContentPanel: React.FC<{
  onConcertsSelected: (concerts: Concert[]) => void;
  onMapIdChange: (mapId: string) => void;
  onConcertSelect: (concert: Concert | null) => void;
  onMarkerStyleChange: (markerStyle: MarkerStyle) => void;
  onZoomToLocation: (lat: number, lng: number, zoom?: number) => void;
  expandedLeg: number | null;
  onLegChange: (leg: number | null) => void;
  onConcertHover?: (concert: Concert | null) => void;

}> = ({
  onConcertsSelected,
  onMapIdChange,
  onConcertSelect,
  onMarkerStyleChange,
  onZoomToLocation,
  expandedLeg,
  onLegChange,
  onConcertHover,
}) => {
  const {currentStep} = useAppSelector((state) => state.navigation);
  const {announceLoading, announceError, announceSuccess} = useAccessibility();
  const {parseURLState} = useURLState();

  const currentTour = useMemo(() => {
    return tours.find((t) => t.step === currentStep);
  }, [currentStep]);

  const [groupedConcerts, setGroupedConcerts] = useState<GroupedConcerts>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDesignInsight, setActiveDesignInsight] = useState<{
    tour: string;
    leg: number;
  } | null>(null);

  const tourData = useMemo(() => {
    return currentTour ? groupedConcerts[currentTour.tour] ?? {} : {};
  }, [currentTour, groupedConcerts]);

  const legs = useMemo(() => {
    return Object.keys(tourData)
      .map(Number)
      .sort((a, b) => a - b);
  }, [tourData]);

  // Cleanup effect to reset loading state when no tour is selected
  useEffect(() => {
    if (!currentTour) {
      setIsLoading(false);
      setError(null);
    }
  }, [currentTour]);

  useEffect(() => {
    if (!currentTour) return;

    const loadConcerts = async (): Promise<void> => {
      setIsLoading(true);
      setError(null);
      announceLoading(`Loading concerts for ${currentTour.title}...`);

      // Add a timeout to prevent infinite loading
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
        setError('Loading timeout - please refresh the page');
      }, 10000); // 10 second timeout

      try {
        // Test if the JSON file is accessible
        const testResponse = await fetch('/data/u2-concerts.json');
        if (!testResponse.ok) {
          throw new Error(`JSON file not accessible: ${testResponse.status}`);
        }

        const filters: FilterOptions = {includeTours: [currentTour.tour]};
        const concerts = await getGroupedConcerts(filters);

        // Validate the response
        const validation = validateApiResponse(concerts);
        if (!validation.isValid) {
          throw new Error(`Data validation failed: ${validation.errors.map(e => e.message).join(', ')}`);
        }

        clearTimeout(timeoutId); // Clear timeout on success

        setGroupedConcerts(concerts);

        const totalConcerts = Object.values(concerts).flat().length;
        announceSuccess(`Loaded ${totalConcerts} concerts for ${currentTour.title}`);
      } catch (err) {
        clearTimeout(timeoutId); // Clear timeout on error

        const errorMessage = `Failed to load concerts: ${err instanceof Error ? err.message : 'Unknown error'}`;
        // Debug: log error in development only
        // console.error(errorMessage, err);
        setError(errorMessage);
        announceError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    void loadConcerts();
  }, [currentTour, announceError, announceLoading, announceSuccess]);

  useEffect(() => {
    if (!currentTour) return;

    const tourDataForStep = groupedConcerts[currentTour.tour];
    if (tourDataForStep) {
      const allConcerts = Object.values(tourDataForStep).flat();
      onConcertsSelected(allConcerts);
    }

    onMapIdChange(currentTour.tourMapId);
    onMarkerStyleChange(currentTour.defaultMarkerStyle);
    onLegChange(null); // ✅ FIXED
    setActiveDesignInsight(null); // ✅ resets insight when tour changes
  }, [
    groupedConcerts,
    currentTour,
    onConcertsSelected,
    onMapIdChange,
    onMarkerStyleChange,
    onLegChange, // ✅ also needed in deps
    setActiveDesignInsight,
  ]);

  const handleLegExpansionChange = useCallback(
    (legNumber: number, expanded: boolean): void => {
      if (!currentTour) return;

      if (expanded) {
        onLegChange(legNumber); // ✅ replace setExpandedLeg
        const legConcerts = tourData[legNumber.toString()] ?? [];
        onConcertsSelected(legConcerts);

        const legMeta = currentTour.legs.find((l) => l.legNumber === legNumber);
        if (legMeta?.mapId) onMapIdChange(legMeta.mapId);
        if (legMeta?.markerStyle) onMarkerStyleChange(legMeta.markerStyle);
      } else {
        onLegChange(null); // ✅ replace setExpandedLeg
        const allConcerts = Object.values(tourData).flat();
        onConcertsSelected(allConcerts);
        onMapIdChange(currentTour.tourMapId);
        onMarkerStyleChange(currentTour.defaultMarkerStyle);
      }
    },
    [
      currentTour,
      tourData,
      onConcertsSelected,
      onMapIdChange,
      onMarkerStyleChange,
      onLegChange, // ✅ don't forget to include this in deps
    ],
  );

  // Handle URL state for leg expansion
  useEffect(() => {
    if (!currentTour) return;

    const {leg} = parseURLState();
    if (leg && currentTour.legs?.some(l => l.legNumber === leg)) {
      // Auto-expand the leg specified in URL
      handleLegExpansionChange(leg, true);
    }
  }, [currentTour, parseURLState, handleLegExpansionChange]);

  if (!currentTour) return null;

  const matchingInsight = activeDesignInsight
    ? mapStyleInsights.find(
      (i) =>
        i.tour === activeDesignInsight.tour &&
          i.legNumber === activeDesignInsight.leg,
    )
    : null;

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.paper',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          position: 'sticky',
          top: 0,
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          {/* Tour Image */}
          <Box
            alt={`${currentTour.title} tour image`}
            component="img"
            src={currentTour.imageUrl}
            sx={{
              width: 100,
              height: 100,
              objectFit: 'cover',
              borderRadius: 3,
              flexShrink: 0,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                borderColor: 'primary.main',
              },
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: '2px',
              },
            }}
          />

          {/* Tour Info */}
          <Box sx={{flex: 1}}>
            <Typography component="h1" sx={{mb: 0.5}} variant="h5">
              {currentTour.title}
            </Typography>
            <Typography
              sx={{color: 'text.secondary', mb: 0.5}}
              variant="body2"
            >
              {currentTour.period}
            </Typography>
            <Typography sx={{lineHeight: 1.7}} variant="body2">
              {currentTour.description}
            </Typography>
          </Box>

          {/* Accessibility Controls */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            <AccessibilityControls />
          </Box>
        </Box>

      </Box>

      {/* Map Style Insight (Optional Panel) */}
      {matchingInsight && (
        <Box
          sx={{
            px: 2,
            pt: 2,
            pb: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Accordion
            defaultExpanded
            disableGutters
            elevation={0}
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown size={20} />}
              sx={{
                px: 1.5,
                py: 1,
                '&:hover': {
                  backgroundColor: 'primary.50',
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: '2px',
                },
              }}
            >
              <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <Typography sx={{fontWeight: 600}} variant="body2">
                  {matchingInsight.themeName}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  • Tour Cartography Style
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: 1.5,
                pt: 1,
                pb: 1.5,
                maxHeight: '60vh',
                overflow: 'auto',
                overflowX: 'hidden',
              }}
            >
              <MapStyleInsightCard insight={matchingInsight} />
            </AccordionDetails>
          </Accordion>
        </Box>
      )}

      {/* Legs */}
      <Box sx={{
        flex: 1,
        overflow: 'auto',
        overflowX: 'hidden',
        px: 2,
        pt: 0,
        pb: 1,
      }}
      >
        {error && (
          <Box>
            <Alert
              aria-live="assertive"
              role="alert"
              severity="error"
              sx={{mt: 2}}
            >
              {error}
            </Alert>
            {/* Show basic tour info even if concerts fail to load */}
            <Box sx={{mt: 3}}>
              <Typography sx={{mb: 2}} variant="h6">
                Tour Information
              </Typography>
              <Typography color="text.secondary" sx={{mb: 1}} variant="body2">
                <strong>Tour:</strong> {currentTour?.tour}
              </Typography>
              <Typography color="text.secondary" sx={{mb: 1}} variant="body2">
                <strong>Period:</strong> {currentTour?.period}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                <strong>Description:</strong> {currentTour?.description}
              </Typography>
            </Box>
          </Box>
        )}
        {!error && isLoading && (
          <Box sx={{mt: 5, textAlign: 'center'}}>
            <Typography aria-live="polite" color="text.secondary">
              Loading concerts...
            </Typography>
          </Box>
        )}
        {!error && !isLoading && legs.length > 0 && (
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 0}}>
            {legs.map((legNumber) => {
              const legMeta = currentTour.legs.find(
                (l) => l.legNumber === legNumber,
              );
              const legConcerts = tourData[legNumber.toString()] ?? [];

              return (
                <LegCard
                  concerts={legConcerts}
                  isExpanded={expandedLeg === legNumber}
                  key={legNumber}
                  legNumber={legNumber}
                  mapId={legMeta?.mapId ?? currentTour.tourMapId}
                  markerStyle={legMeta?.markerStyle}
                  tourTitle={currentTour.tour}
                  onConcertHover={onConcertHover}
                  onConcertSelect={onConcertSelect}
                  onExpansionChange={(expanded) =>
                    handleLegExpansionChange(legNumber, expanded)
                  }
                  onShowDesign={(tourTitle, legNumber) =>
                    setActiveDesignInsight({
                      tour: tourTitle,
                      leg: legNumber,
                    })
                  }
                  onZoomToLocation={onZoomToLocation}
                />
              );
            })}
          </Box>
        )}
        {!error && !isLoading && legs.length === 0 && (
          <Box sx={{mt: 5, textAlign: 'center'}}>
            <Typography aria-live="polite" color="text.secondary">
              No concerts found for this tour.
            </Typography>
            <Typography color="text.secondary" sx={{mt: 1}} variant="body2">
              Tour: {currentTour?.tour} | Legs: {legs.length}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Navigation */}
      <Box>
        <NavigationComponent />
      </Box>
    </Box>
  );
};

export default ContentPanel;
