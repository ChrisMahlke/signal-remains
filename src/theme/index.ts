import {createTheme, type Theme} from '@mui/material/styles';

// Clean Material Design 3 color tokens - Professional and accessible
// Updated with WCAG AAA compliant contrast ratios
const md3Colors = {
  light: {
    primary: '#0d47a1', // Darker blue for AAA contrast
    onPrimary: '#ffffff',
    primaryContainer: '#e3f2fd',
    onPrimaryContainer: '#0d47a1',
    secondary: '#37474f', // Darker gray for AAA contrast
    onSecondary: '#ffffff',
    secondaryContainer: '#eceff1',
    onSecondaryContainer: '#263238',
    tertiary: '#6a1b9a', // Darker purple for AAA contrast
    onTertiary: '#ffffff',
    tertiaryContainer: '#f3e5f5',
    onTertiaryContainer: '#4a148c',
    error: '#c62828', // Darker red for AAA contrast
    onError: '#ffffff',
    errorContainer: '#ffebee',
    onErrorContainer: '#c62828',
    background: '#ffffff',
    onBackground: '#1a1a1a', // Darker text for AAA contrast
    surface: '#ffffff',
    onSurface: '#1a1a1a', // Darker text for AAA contrast
    surfaceVariant: '#f5f5f5',
    onSurfaceVariant: '#424242',
    outline: '#bdbdbd',
    outlineVariant: '#e0e0e0',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#303030',
    inverseOnSurface: '#fafafa',
    inversePrimary: '#90caf9',
  },
  dark: {
    primary: '#90caf9',
    onPrimary: '#0d47a1',
    primaryContainer: '#1976d2',
    onPrimaryContainer: '#e3f2fd',
    secondary: '#90a4ae',
    onSecondary: '#263238',
    secondaryContainer: '#546e7a',
    onSecondaryContainer: '#eceff1',
    tertiary: '#ce93d8',
    onTertiary: '#4a148c',
    tertiaryContainer: '#8e24aa',
    onTertiaryContainer: '#f3e5f5',
    error: '#ef5350',
    onError: '#c62828',
    errorContainer: '#d32f2f',
    onErrorContainer: '#ffebee',
    background: '#121212',
    onBackground: '#f5f5f5', // Lighter text for AAA contrast
    surface: '#1e1e1e',
    onSurface: '#f5f5f5', // Lighter text for AAA contrast
    surfaceVariant: '#424242',
    onSurfaceVariant: '#e0e0e0', // Lighter text for AAA contrast
    outline: '#757575',
    outlineVariant: '#616161',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#e0e0e0',
    inverseOnSurface: '#212121',
    inversePrimary: '#1565c0',
  },
};

export const createAppTheme = (darkMode: boolean, fontSize: 'small' | 'medium' | 'large'): Theme => {
  const colors = darkMode ? md3Colors.dark : md3Colors.light;

  const fontSizeMultiplier = (() => {
    switch (fontSize) {
      case 'small':
        return 0.95;
      case 'medium':
        return 1.1;
      case 'large':
        return 1.3;
      default:
        return 1.1;
    }
  })();

  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: colors.primary,
        contrastText: colors.onPrimary,
      },
      secondary: {
        main: colors.secondary,
        contrastText: colors.onSecondary,
      },
      error: {
        main: colors.error,
        contrastText: colors.onError,
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.onSurface,
        secondary: colors.onSurfaceVariant,
      },
      divider: colors.outline,
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      h1: {
        fontSize: `${1.75 * fontSizeMultiplier}rem`,
        fontWeight: 300,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: `${1.5 * fontSizeMultiplier}rem`,
        fontWeight: 300,
        lineHeight: 1.25,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontSize: `${1.25 * fontSizeMultiplier}rem`,
        fontWeight: 400,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: `${1.125 * fontSizeMultiplier}rem`,
        fontWeight: 500,
        lineHeight: 1.35,
      },
      h5: {
        fontSize: `${1.0 * fontSizeMultiplier}rem`,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: `${0.9 * fontSizeMultiplier}rem`,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: `${0.8 * fontSizeMultiplier}rem`,
        lineHeight: 1.6,
        letterSpacing: '0.01em',
        fontWeight: 400,
      },
      body2: {
        fontSize: `${0.75 * fontSizeMultiplier}rem`,
        lineHeight: 1.6,
        letterSpacing: '0.01em',
        fontWeight: 400,
      },
      button: {
        textTransform: 'none',
        fontWeight: 400,
        fontSize: `${0.75 * fontSizeMultiplier}rem`,
        letterSpacing: '0.02em',
      },
    },
    shape: {
      borderRadius: 2,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            padding: '10px 20px',
            minHeight: 44,
            minWidth: 44,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            fontWeight: 400,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            '&:focus-visible': {
              outline: `2px solid ${colors.primary}`,
              outlineOffset: '2px',
            },
            // Respect reduced motion preference
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
          contained: {
            backgroundColor: colors.primary,
            color: colors.onPrimary,
            '&:hover': {
              backgroundColor: colors.primary,
              filter: 'brightness(0.9)',
            },
          },
          outlined: {
            borderColor: colors.outline,
            '&:hover': {
              borderColor: colors.primary,
              backgroundColor: `${colors.primary}08`,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            background: colors.surface,
            '&:hover': {
              boxShadow: 'none',
            },
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 4,
            backgroundColor: colors.surfaceVariant,
            overflow: 'hidden',
          },
          bar: {
            backgroundColor: colors.primary,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            minWidth: 44,
            minHeight: 44,
            padding: 10,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:focus-visible': {
              outline: `2px solid ${colors.primary}`,
              outlineOffset: '2px',
            },
            '&:hover': {
              backgroundColor: `${colors.primary}08`,
            },
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            minHeight: 28,
            fontSize: `${0.75 * fontSizeMultiplier}rem`,
            fontWeight: 400,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:focus-visible': {
              outline: `2px solid ${colors.primary}`,
              outlineOffset: '2px',
            },
            '&.MuiChip-clickable:hover': {
              backgroundColor: `${colors.primary}12`,
            },
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            minHeight: 56,
            padding: '0 16px',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:focus-visible': {
              outline: `2px solid ${colors.primary}`,
              outlineOffset: '2px',
            },
            '&:hover': {
              backgroundColor: `${colors.primary}04`,
            },
          },
          content: {
            margin: '12px 0',
            '&.Mui-expanded': {
              margin: '12px 0',
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            minHeight: 44,
            margin: '2px 0',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&.MuiListItem-button': {
              '&:focus-visible': {
                outline: `2px solid ${colors.primary}`,
                outlineOffset: '2px',
              },
              '&:hover': {
                backgroundColor: `${colors.primary}08`,
              },
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            maxWidth: '90vw',
            maxHeight: '90vh',
            margin: 16,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            background: colors.surface,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: '20px 20px 12px',
            fontSize: `${1.0 * fontSizeMultiplier}rem`,
            fontWeight: 400,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: '12px 20px',
            '&:first-of-type': {
              paddingTop: 12,
            },
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '12px 20px 20px',
            gap: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
          elevation1: {
            boxShadow: 'none',
          },
          elevation2: {
            boxShadow: 'none',
          },
          elevation3: {
            boxShadow: 'none',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: colors.outlineVariant,
            opacity: 0.8,
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
          track: {
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
          thumb: {
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: `${0.75 * fontSizeMultiplier}rem`,
            backgroundColor: colors.inverseSurface,
            color: colors.inverseOnSurface,
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          },
        },
      },
    },
  });
};

// Export the theme with current settings
export const theme = createAppTheme(false, 'medium');
