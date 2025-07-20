// src/components/ClickableText.tsx
import {Typography, Link} from '@mui/material';
import React from 'react';

export interface ClickableTextSegment {
  text: string;
  lat: number;
  lng: number;
}

export interface ClickableTextProps {
  textSegments: Array<string | ClickableTextSegment>;
  onCoordinateClick: (lat: number, lng: number, zoom?: number) => void;
}

/**
 * Renders a paragraph of mixed static text and clickable location segments.
 */
const ClickableText: React.FC<ClickableTextProps> = ({
  textSegments,
  onCoordinateClick,
}) => {
  const handleClick = (segment: ClickableTextSegment): void => {
    // Debug: Coordinates clicked - can be enabled for debugging
    // console.log(`Coordinates clicked: ${segment.lat}, ${segment.lng} (${segment.text})`);
    onCoordinateClick(segment.lat, segment.lng, 10);
  };

  return (
    <Typography
      sx={{lineHeight: 1.6, color: 'text.secondary'}}
      variant="body2"
    >
      {textSegments.map((segment, index) => {
        if (typeof segment === 'string') {
          return <span key={`text-${index}`}>{segment}</span>;
        }

        return (
          <Link
            component="button"
            key={`link-${segment.text}-${index}`}
            sx={{
              color: 'primary.main',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              font: 'inherit',
              position: 'relative',
              transition: 'all 0.2s ease-in-out',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.dark',
                backgroundColor: 'primary.50',
              },
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: '2px',
                backgroundColor: 'primary.50',
              },
            }}
            variant="body2"
            onClick={() => handleClick(segment)}
          >
            {segment.text}
          </Link>
        );
      })}
    </Typography>
  );
};

export default ClickableText;
