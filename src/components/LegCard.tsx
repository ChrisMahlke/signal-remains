import {
  Box,
  Typography,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemText,
  Paper,
  ListItemButton,
} from '@mui/material';
import {
  ChevronDown,
  Calendar,
  MapPin,
  Music,
  Globe,
  Building,
} from 'lucide-react';
import React, {useMemo} from 'react';

import {tours} from '../data/tours';
import {formatShortDate, getDateRange} from '../lib/formatConcertUtils';

import ClickableText from './ClickableText';

import type {ClickableTextSegment} from './ClickableText';
import type {Concert} from '../lib/groupConcerts';
import type {MarkerStyle} from '../types/tour';

export interface LegCardProps {
  legNumber: number;
  concerts: Concert[];
  tourTitle: string;
  mapId: string;
  markerStyle?: MarkerStyle;
  onConcertSelect: (concert: Concert | null) => void;
  onZoomToLocation: (lat: number, lng: number, zoom?: number) => void;
  isExpanded: boolean;
  onExpansionChange: (expanded: boolean) => void;
  onShowDesign: (tourTitle: string, legNumber: number) => void;
  onConcertHover?: (concert: Concert | null) => void;
}

export interface CulturalContextItem {
  title: string;
  description: Array<string | ClickableTextSegment>;
  icon: React.ReactNode;
  color: string;
}

const formatLegNumber = (n: number): string => {
  const suffix =
    n % 100 >= 11 && n % 100 <= 13
      ? 'th'
      : ['th', 'st', 'nd', 'rd'][n % 10] ?? 'th';
  return `${n}${suffix} Leg`;
};

const pluralize = (count: number, singular: string, plural: string): string =>
  count === 1 ? singular : plural;

const LegCard: React.FC<LegCardProps> = ({
  legNumber,
  concerts,
  tourTitle,
  onConcertSelect,
  onZoomToLocation,
  isExpanded,
  onExpansionChange,
  onConcertHover,
}) => {
  const {first, last} =
    concerts.length > 0 ? getDateRange(concerts) : {first: null, last: null};

  const uniqueStats = {
    countries: new Set(concerts.map((c) => c.country)).size,
    cities: new Set(concerts.map((c) => c.city)).size,
    venues: new Set(concerts.map((c) => c.venue)).size,
  };

  const culturalContext: CulturalContextItem[] | undefined = useMemo(() => {
    const tour = tours.find((t) => t.tour === tourTitle);
    return tour?.legs.find((l) => l.legNumber === legNumber)?.culturalContext;
  }, [tourTitle, legNumber]);

  const handleConcertClick = (concert: Concert): void => {
    onConcertSelect(concert);
    onZoomToLocation(concert.lat, concert.lng, 12);
  };

  return (
    <Card
      sx={{
        mb: 2,
        border: '1px solid',
        borderColor: isExpanded ? 'primary.light' : 'divider',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: 'surfaceVariant',
          borderColor: 'primary.main',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Accordion
        aria-label={`${formatLegNumber(legNumber)} details`}
        expanded={isExpanded}
        sx={{boxShadow: 'none'}}
        onChange={(_, exp) => onExpansionChange(exp)}
      >
        <AccordionSummary
          aria-label={`${formatLegNumber(legNumber)} - ${
            first && last ? `${formatShortDate(first)} to ${formatShortDate(last)}` : 'No dates'
          } - ${concerts.length} concerts`}
          expandIcon={
            <ChevronDown
              aria-hidden="true"
              size={20}
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            />
          }
          sx={{
            px: 3,
            py: 2,
            backgroundColor: 'background.paper',
            cursor: 'pointer',
            position: 'relative',
            '& .MuiAccordionSummary-content': {
              flexDirection: 'column',
              m: '16px 0',
            },
            '&:hover': {
              backgroundColor: 'primary.50',
            },
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: '2px',
              backgroundColor: 'primary.50',
            },

          }}
        >
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <Box alignItems="center" display="flex" gap={2}>
                <Typography color="text.primary" variant="h6">
                  {formatLegNumber(legNumber)}
                </Typography>
                <Calendar aria-hidden="true" color="#1976d2" size={16} />
                <Typography color="text.secondary" variant="body2">
                  {first && last
                    ? `${formatShortDate(first)} – ${formatShortDate(last)}`
                    : 'No dates'}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  display: {xs: 'none', sm: 'block'},
                  color: 'primary.main',
                  fontWeight: 500,
                  position: 'absolute',
                  right: 50,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                }}
              >
                {isExpanded ? 'Hide' : 'Show'} details
              </Typography>
            </Box>

            {/* Stats */}
            <Box display="flex" flexWrap="wrap" gap={2}>
              <Stat
                icon={<Music aria-hidden="true" color="#1976d2" size={14} />}
                label={`${concerts.length} ${pluralize(
                  concerts.length,
                  'show',
                  'shows',
                )}`}
              />
              <Stat
                icon={<Globe aria-hidden="true" color="#f57c00" size={14} />}
                label={`${uniqueStats.countries} ${pluralize(
                  uniqueStats.countries,
                  'country',
                  'countries',
                )}`}
              />
              <Stat
                icon={<MapPin aria-hidden="true" color="#4caf50" size={14} />}
                label={`${uniqueStats.cities} ${pluralize(
                  uniqueStats.cities,
                  'city',
                  'cities',
                )}`}
              />
              <Stat
                icon={<Building aria-hidden="true" color="#9c27b0" size={14} />}
                label={`${uniqueStats.venues} ${pluralize(
                  uniqueStats.venues,
                  'venue',
                  'venues',
                )}`}
              />
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails sx={{px: 3, pt: 0, pb: 2}}>
          {/* Cultural Context */}
          {culturalContext && culturalContext.length > 0 && (
            <Paper aria-label="Cultural context information" sx={{p: 2}}>
              <Typography
                sx={{mb: 0.5, textTransform: 'uppercase'}}
                variant="h6"
              >
                Cultural Context
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {culturalContext.map((context, index) => (
                  <Paper aria-label={`Cultural context: ${context.title}`} key={index} sx={{p: 2}}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Box sx={{color: context.color}}>{React.cloneElement(context.icon as React.ReactElement, {'aria-hidden': true})}</Box>
                      <Typography color="text.primary" variant="subtitle2">
                        {context.title}
                      </Typography>
                    </Box>
                    <ClickableText
                      textSegments={context.description}
                      onCoordinateClick={onZoomToLocation}
                    />
                  </Paper>
                ))}
              </Box>
            </Paper>
          )}

          {/* Concert List */}
          <Accordion
            aria-label="All shows list"
            sx={{
              mt: 0.5,
              boxShadow: 'none',
              backgroundColor: 'background.paper',
            }}
          >
            <AccordionSummary
              aria-label={`All shows in ${formatLegNumber(legNumber)} - ${
                concerts.length
              } concerts`}
              expandIcon={<ChevronDown aria-hidden="true" size={20} />}
              sx={{
                px: 2,
                py: 1,
                '& .MuiAccordionSummary-content': {margin: '12px 0'},
                '&:hover': {backgroundColor: 'primary.50'},
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: '2px',
                },
              }}
            >
              <Typography sx={{textTransform: 'uppercase'}} variant="h6">
                All Shows
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{px: 1, pt: 0, pb: 1}}>
              <List dense sx={{py: 0}}>
                {concerts.map((concert, index) => (
                  <ListItemButton
                    aria-label={`${concert.city}, ${concert.country} - ${concert.venue} on ${
                      formatShortDate(new Date(concert.date))
                    }`}
                    key={index}
                    sx={{
                      borderLeft: '1px solid',
                      borderColor: 'text.disabled',
                      px: 2,
                      py: 0.5,
                      '&:hover': {backgroundColor: 'primary.50'},
                      '&:focus-visible': {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: '2px',
                      },
                    }}
                    onClick={() => handleConcertClick(concert)}
                    onMouseEnter={() => onConcertHover?.(concert)}
                    onMouseLeave={() => onConcertHover?.(null)}
                  >
                    <ListItemText
                      primary={`${concert.city}, ${concert.country}`}
                      primaryTypographyProps={{variant: 'subtitle2'}}
                      secondary={`${concert.venue} • ${formatShortDate(
                        new Date(concert.date),
                      )}`}
                      secondaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.secondary',
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

const Stat: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <Box alignItems="center" display="flex" gap={0.5}>
    {icon}
    <Typography color="text.secondary" variant="body2">
      {label}
    </Typography>
  </Box>
);

export default LegCard;
