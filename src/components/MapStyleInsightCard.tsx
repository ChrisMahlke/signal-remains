import {Box, Typography, Paper, Divider, useTheme} from '@mui/material';
import React from 'react';

import type {StyleInsight} from '../types/mapStyleInsight';

interface Props {
  insight: StyleInsight;
}

const MapStyleInsightCard: React.FC<Props> = ({insight}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper
      sx={{
        p: 3,
        mb: 3,
        backgroundColor: 'background.paper',
        borderRadius: 3,
        border: `1px solid ${
          isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
        }`,
        boxShadow: isDark
          ? '0 4px 16px rgba(0, 0, 0, 0.2)'
          : '0 4px 16px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: isDark
            ? '0 6px 24px rgba(0, 0, 0, 0.3)'
            : '0 6px 24px rgba(0, 0, 0, 0.12)',
          transform: 'translateY(-1px)',
        },
      }}
      variant="outlined"
    >
      {/* Enhanced Header */}
      <Box sx={{mb: 3}}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            mb: 0.5,
          }}
          variant="h6"
        >
          {insight.themeName}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            fontWeight: 500,
          }}
          variant="body2"
        >
          {insight.visualSummary}
        </Typography>
      </Box>

      <Divider sx={{my: 3, opacity: 0.6}} />

      {/* Enhanced Block-by-block rationale */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {insight.rationale.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 2.5,
              borderRadius: 2,
              backgroundColor: isDark
                ? 'rgba(255, 255, 255, 0.02)'
                : 'rgba(0, 0, 0, 0.02)',
              border: `1px solid ${
                isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'
              }`,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: isDark
                  ? 'rgba(255, 255, 255, 0.04)'
                  : 'rgba(0, 0, 0, 0.04)',
                borderColor: isDark
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            {/* Enhanced Label */}
            <Box
              sx={{
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
                variant="subtitle2"
              >
                {item.label}
              </Typography>
            </Box>

            {/* Enhanced Swatch + Explanation */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 1.5,
                p: 1.5,
                borderRadius: 1.5,
                backgroundColor: isDark
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${
                  isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
                }`,
              }}
            >
              {item.color && (
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    backgroundColor: item.color,
                    borderRadius: 1,
                    border: `2px solid ${isDark ? '#444' : '#ddd'}`,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                  }}
                />
              )}
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                }}
                variant="caption"
              >
                {item.featureType}.{item.elementType} • {item.color}
              </Typography>
            </Box>

            {/* Enhanced Meaning */}
            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.7,
                fontWeight: 400,
              }}
              variant="body2"
            >
              {item.meaning}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default MapStyleInsightCard;
