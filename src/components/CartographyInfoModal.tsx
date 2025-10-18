import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Paper,
  Chip,
  useTheme,
  IconButton,
  Tooltip,
  Fade,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
} from '@mui/material';
import {
  X,
  Globe,
  Music,
  Brain,
  Map,
  ChevronDown,
  Copy,
  Clock,
  Sparkles,
  BookOpen,
  Layers,
  Palette,
  Zap,
} from 'lucide-react';
import React, {useState} from 'react';

interface CartographyInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const CartographyInfoModal: React.FC<CartographyInfoModalProps> = ({open, onClose}) => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const isDark = theme.palette.mode === 'dark';

  const handleCopyProjectInfo = async (): Promise<void> => {
    const projectInfo =
      'The Signal Remains - Interactive U2 Tour Atlas\n\n' +
      'Project Vision:\n' +
      'World tours aren\'t just entertainment — they\'re shaped by and reflective of the political and cultural conditions of their time. U2, in particular, moved through spaces defined by Cold War borders, global media shifts, and post-colonial transitions.\n\n' +
      'Features:\n' +
      '• Custom-Styled Maps\n' +
      '• Interactive Markers\n' +
      '• AI-Generated Context\n' +
      '• Historical Narratives\n' +
      '• Real-time AI Integration\n\n' +
      'Explore the journey of U2\'s tours from 1978 to 1998 as a narrative of movement, tension, and memory.';

    try {
      await navigator.clipboard.writeText(projectInfo);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 3000);
    } catch {
      // Silently handle clipboard errors - user will see the failure through UI
      setShowCopySuccess(false);
    }
  };

  const handleSectionClick = (section: string): void => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            maxWidth: {xs: '95vw', md: '800px'},
            maxHeight: '90vh',
            margin: 2,
            overflow: 'hidden',
            background: isDark
              ? 'rgba(30, 30, 40, 0.98)'
              : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(12px)',
            borderRadius: 4,
            boxShadow: isDark
              ? '0 20px 60px rgba(0, 0, 0, 0.4)'
              : '0 20px 60px rgba(0, 0, 0, 0.15)',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
          },
        }}
        TransitionComponent={Fade}
        maxWidth="md"
        open={open}
        scroll="paper"
        transitionDuration={400}
        onClose={onClose}
      >
        {/* Enhanced Header */}
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 2,
            px: 4,
            pt: 3,
            background: isDark
              ? 'linear-gradient(135deg, rgba(40, 40, 50, 0.95) 0%, rgba(35, 35, 45, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(250, 250, 255, 0.95) 0%, rgba(245, 245, 250, 0.95) 100%)',
            borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'}`,
          }}
        >
          <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${
                  theme.palette.secondary.main
                } 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
              }}
            >
              <Map color="white" size={24} />
            </Box>
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${
                    theme.palette.secondary.main
                  } 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 0.5,
                }}
                variant="h4"
              >
                The Signal Remains
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
                variant="body2"
              >
                Interactive U2 Tour Atlas • 1978-1998
              </Typography>
            </Box>
          </Box>

          <Box sx={{display: 'flex', gap: 1}}>
            <Tooltip title="Copy project information">
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => {
                  void handleCopyProjectInfo();
                }}
              >
                <Copy size={18} />
              </IconButton>
            </Tooltip>
            <IconButton
              sx={{
                width: 40,
                height: 40,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
                  transform: 'scale(1.05)',
                },
              }}
              onClick={onClose}
            >
              <X size={20} />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent
          sx={{
            pt: 3,
            pb: 2,
            px: 4,
            overflow: 'auto',
            overflowX: 'hidden',
          }}
        >
          {/* Project Stats */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {xs: '1fr', sm: 'repeat(4, 1fr)'},
              gap: 2,
              mb: 4,
            }}
          >
            {[
              {icon: <Clock size={16} />, label: '20 Years', value: '1978-1998'},
              {icon: <Globe size={16} />, label: 'Global Tours', value: '11 Major Tours'},
              {icon: <Music size={16} />, label: 'Concert Data', value: '500+ Shows'},
              {icon: <Brain size={16} />, label: 'AI Enhanced', value: 'Gemini 2.0 Flash'},
            ].map((stat, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  borderRadius: 2,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box sx={{color: 'primary.main', mb: 1}}>{stat.icon}</Box>
                <Typography sx={{color: 'text.secondary', mb: 0.5}} variant="body2">
                  {stat.label}
                </Typography>
                <Typography sx={{fontWeight: 600}} variant="h6">
                  {stat.value}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Interactive Sections */}
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {/* Project Vision */}
            <Accordion
              expanded={activeSection === 'vision'}
              sx={{
                background: 'transparent',
                boxShadow: 'none',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                borderRadius: 2,
                overflow: 'hidden',
                '&:before': {display: 'none'},
              }}
              onChange={() => handleSectionClick('vision')}
            >
              <AccordionSummary
                expandIcon={<ChevronDown size={20} />}
                sx={{
                  px: 3,
                  py: 2,
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  '&:hover': {
                    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Globe color="white" size={16} />
                  </Box>
                  <Typography sx={{fontWeight: 600}} variant="h6">
                    Project Vision
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{px: 3, py: 3}}>
                <Typography sx={{lineHeight: 1.8, mb: 0}} variant="body1">
                  World tours aren't just entertainment — they're shaped by and reflective of the
                </Typography>
                <Typography sx={{lineHeight: 1.8, mb: 0}} variant="body1">
                  political and cultural conditions of their time. U2, in particular, moved through
                </Typography>
                <Typography sx={{lineHeight: 1.8, mb: 2}} variant="body1">
                  spaces defined by Cold War borders, global media shifts, and
                  post-colonial transitions.
                </Typography>
                <Typography sx={{lineHeight: 1.8, mb: 2}} variant="body1">
                  Cold War borders, global media shifts, and post-colonial transitions.
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  Their tours from 1978 to 1998 provide a unique dataset for visualizing how sound
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  intersects with power, geography, and access. This project explores that feedback
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  loop: how geopolitics influenced U2's path — and how the band, in turn, shaped
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  cultural space.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Features */}
            <Accordion
              expanded={activeSection === 'features'}
              sx={{
                background: 'transparent',
                boxShadow: 'none',
                border: `1px solid ${
                  isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }`,
                borderRadius: 2,
                overflow: 'hidden',
                '&:before': {display: 'none'},
              }}
              onChange={() => handleSectionClick('features')}
            >
              <AccordionSummary
                expandIcon={<ChevronDown size={20} />}
                sx={{
                  px: 3,
                  py: 2,
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  '&:hover': {
                    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.secondary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Music color="white" size={16} />
                  </Box>
                  <Typography sx={{fontWeight: 600}} variant="h6">
                    Interactive Features
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{px: 3, py: 3}}>
                <Typography sx={{lineHeight: 1.8, mb: 0}} variant="body1">
                  <strong>The Signal Remains</strong> is a scroll-driven, styled, cloud-hosted atlas
                </Typography>
                <Typography sx={{lineHeight: 1.8, mb: 0}} variant="body1">
                  that remaps U2's major 20th-century tours as a narrative of movement, tension, and
                </Typography>
                <Typography sx={{lineHeight: 1.8, mb: 3}} variant="body1">
                  memory.
                </Typography>

                <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)'}, gap: 2, mb: 3}}>
                  {[
                    {icon: <Layers size={16} />, label: 'Custom-Styled Maps', color: 'primary'},
                    {icon: <Map size={16} />, label: 'Interactive Markers', color: 'secondary'},
                    {icon: <Brain size={16} />, label: 'AI-Generated Context', color: 'success'},
                    {icon: <BookOpen size={16} />, label: 'Historical Narratives', color: 'warning'},
                  ].map((feature, index) => (
                    <Chip
                      color={
                        feature.color as 'primary' | 'secondary' | 'success' | 'warning'
                      }
                      icon={feature.icon}
                      key={index}
                      label={feature.label}
                      sx={{
                        height: 40,
                        fontWeight: 500,
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                      variant="outlined"
                    />
                  ))}
                </Box>

                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  Each era uses a custom-styled Google Map to express regional and historical tone.
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  Tour stops are rendered as interactive markers, and when selected, each one
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  calls <strong> Gemini 1.5</strong> to dynamically generate contextual insights
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  — including cultural, historical, or political background relevant to that show's
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  time and place.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* AI Integration */}
            <Accordion
              expanded={activeSection === 'ai'}
              sx={{
                background: 'transparent',
                boxShadow: 'none',
                border: `1px solid ${
                  isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }`,
                borderRadius: 2,
                overflow: 'hidden',
                '&:before': {display: 'none'},
              }}
              onChange={() => handleSectionClick('ai')}
            >
              <AccordionSummary
                expandIcon={<ChevronDown size={20} />}
                sx={{
                  px: 3,
                  py: 2,
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  '&:hover': {
                    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${
                        theme.palette.info.main
                      } 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Zap color="white" size={16} />
                  </Box>
                  <Typography sx={{fontWeight: 600}} variant="h6">
                    AI-Enhanced Storytelling
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{px: 3, py: 3}}>
                <Typography sx={{lineHeight: 1.8}} variant="body1">
                  This is a map-driven story about global music as geopolitical artifact — enhanced
                </Typography>
                <Typography sx={{lineHeight: 1.8, mb: 2}} variant="body1">
                  with real-time AI and expressive cartography.
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body2">
                  Each concert location becomes a window into the political, cultural, and social
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body2">
                  context of its time, creating a rich tapestry of historical understanding through
                </Typography>
                <Typography sx={{lineHeight: 1.8}} variant="body2">
                  the lens of U2's global journey.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Cartographic Design */}
            <Accordion
              expanded={activeSection === 'design'}
              sx={{
                background: 'transparent',
                boxShadow: 'none',
                border: `1px solid ${
                  isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }`,
                borderRadius: 2,
                overflow: 'hidden',
                '&:before': {display: 'none'},
              }}
              onChange={() => handleSectionClick('design')}
            >
              <AccordionSummary
                expandIcon={<ChevronDown size={20} />}
                sx={{
                  px: 3,
                  py: 2,
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  '&:hover': {
                    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.warning.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Palette color="white" size={16} />
                  </Box>
                  <Typography sx={{fontWeight: 600}} variant="h6">
                    Cartographic Design Philosophy
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{px: 3, py: 3}}>
                <Typography sx={{lineHeight: 1.7, color: 'text.secondary'}} variant="body2">
                  Each map style is carefully chosen to reflect the era and region being explored.
                </Typography>
                <Typography sx={{lineHeight: 1.7, color: 'text.secondary'}} variant="body2">
                  The visual language of the cartography itself becomes part of the narrative,
                </Typography>
                <Typography sx={{lineHeight: 1.7, color: 'text.secondary'}} variant="body2">
                  with colors, typography, and styling that evoke the cultural and political
                </Typography>
                <Typography sx={{lineHeight: 1.7, color: 'text.secondary'}} variant="body2">
                  atmosphere of each tour period.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            px: 4,
            py: 3,
            justifyContent: 'space-between',
            borderTop: `1px solid ${
              isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'
            }`,
            background: isDark ? 'rgba(40, 40, 50, 0.5)' : 'rgba(250, 250, 255, 0.5)',
          }}
        >
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <Typography sx={{color: 'text.secondary'}} variant="body2">
              Made with ❤️ for music history
            </Typography>
          </Box>

          <Button
            size="large"
            startIcon={<Sparkles size={18} />}
            sx={{
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${
                theme.palette.secondary.main
              } 100%)`,
              boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
              '&:hover': {
                boxShadow: `0 6px 24px ${theme.palette.primary.main}60`,
                transform: 'translateY(-1px)',
              },
            }}
            variant="contained"
            onClick={onClose}
          >
            Explore the Journey
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Notification */}
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        autoHideDuration={3000}
        message="Project information copied to clipboard"
        open={showCopySuccess}
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
            borderRadius: 2,
          },
        }}
        onClose={() => setShowCopySuccess(false)}
      />
    </>
  );
};

export default CartographyInfoModal;
