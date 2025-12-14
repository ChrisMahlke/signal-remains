import {
  Box,
  Typography,
  Button,
  Container,
  Fade,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import { Play, Map, Music, Globe, Palette } from "lucide-react";
import React, { useState } from "react";

interface HomePageProps {
  onStart: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [isFading, setIsFading] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleStart = (): void => {
    setIsFading(true);
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  return (
    <Fade in={!isFading} timeout={isFading ? 1000 : 500}>
      <Box
        sx={{
          minHeight: "100vh",
          background: isDark
            ? "linear-gradient(135deg, #121212 0%, #1e1e1e 50%, #121212 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {/* Main Content */}
            <Box
              sx={{ flex: { xs: "1", md: "7" }, color: "text.primary", mb: 4 }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  background: isDark
                    ? "linear-gradient(45deg, #64b5f6 30%, #90caf9 90%)"
                    : "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: isDark
                    ? "0 4px 8px rgba(255,255,255,0.1)"
                    : "0 4px 8px rgba(0,0,0,0.1)",
                }}
                variant="h1"
              >
                Signal Remains
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 300,
                  mb: 4,
                  color: "text.secondary",
                  lineHeight: 1.4,
                }}
                variant="h2"
              >
                Tracing U2’s Soundwaves Across a Shifting World Map
              </Typography>

              {/* Project Description */}
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  mb: 4.5,
                  color: "text.secondary",
                  maxWidth: 600,
                }}
                variant="body1"
              >
                An interactive cartographic exploration of U2's concert tours
                during the 20th century. Experience the band's evolution through
                carefully designed map styles that reflect the cultural,
                political, and technological contexts of each era.
              </Typography>

              {/* Start Button */}
              <Button
                size="large"
                startIcon={<Play size={24} />}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  px: 6,
                  py: 2.5,
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(25, 118, 210, 0.4)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
                variant="contained"
                onClick={handleStart}
              >
                Explore the Journey
              </Button>
            </Box>

            {/* Features Panel */}
            <Box sx={{ flex: { xs: "1", md: "5" } }}>
              <Paper
                elevation={2}
                sx={{
                  backgroundColor: isDark ? "#1e1e1e" : "white",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  p: 4,
                  color: "text.primary",
                  boxShadow: isDark
                    ? "0 8px 32px rgba(0, 0, 0, 0.5)"
                    : "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    mb: 3,
                    textAlign: "center",
                    color: "text.primary",
                  }}
                  variant="h3"
                >
                  What You'll Discover
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* Feature 1 */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: isDark
                          ? "rgba(100, 181, 246, 0.15)"
                          : "#e3f2fd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Map color={isDark ? "#64b5f6" : "#1976d2"} size={20} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}
                        variant="h6"
                      >
                        Interactive Cartography
                      </Typography>
                      <Typography
                        sx={{ color: "text.secondary" }}
                        variant="body2"
                      >
                        Explore 20+ years of tour data with custom map styles
                      </Typography>
                    </Box>
                  </Box>

                  {/* Feature 2 */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: isDark
                          ? "rgba(186, 104, 200, 0.15)"
                          : "#f3e5f5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Palette
                        color={isDark ? "#ba68c8" : "#9c27b0"}
                        size={20}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}
                        variant="h6"
                      >
                        Design Philosophy
                      </Typography>
                      <Typography
                        sx={{ color: "text.secondary" }}
                        variant="body2"
                      >
                        Each map style reflects the cultural context of its era
                      </Typography>
                    </Box>
                  </Box>

                  {/* Feature 3 */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: isDark
                          ? "rgba(255, 183, 77, 0.15)"
                          : "#fff3e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Music color={isDark ? "#ffb74d" : "#ff9800"} size={20} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}
                        variant="h6"
                      >
                        Concert Details
                      </Typography>
                      <Typography
                        sx={{ color: "text.secondary" }}
                        variant="body2"
                      >
                        Dive into venue information and historical context
                      </Typography>
                    </Box>
                  </Box>

                  {/* Feature 4 */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: isDark
                          ? "rgba(129, 199, 132, 0.15)"
                          : "#e8f5e8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Globe color={isDark ? "#81c784" : "#4caf50"} size={20} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}
                        variant="h6"
                      >
                        Global Perspective
                      </Typography>
                      <Typography
                        sx={{ color: "text.secondary" }}
                        variant="body2"
                      >
                        Witness U2's transformation from local band to global
                        phenomenon
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider
                  sx={{
                    my: 3,
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                  }}
                />

                {/* Stats */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        color: isDark ? "#64b5f6" : "#1976d2",
                      }}
                      variant="h4"
                    >
                      20+
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary" }}
                      variant="caption"
                    >
                      Years
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        color: isDark ? "#ba68c8" : "#9c27b0",
                      }}
                      variant="h4"
                    >
                      500+
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary" }}
                      variant="caption"
                    >
                      Concerts
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        color: isDark ? "#81c784" : "#4caf50",
                      }}
                      variant="h4"
                    >
                      35+
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary" }}
                      variant="caption"
                    >
                      Countries
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default HomePage;
