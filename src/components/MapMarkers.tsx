import {
  Box,
  Typography,
  Chip,
  CircularProgress,
  Alert,
  IconButton,
  useTheme,
} from "@mui/material";
import { AdvancedMarker, InfoWindow, useMap } from "@vis.gl/react-google-maps";
import {
  Calendar as CalendarToday,
  MapPin,
  Music as MusicNote,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";

import { fetchGeminiContext } from "../lib/gemini";

import type { GeminiResponse } from "../lib/gemini";
import type { Concert } from "../lib/groupConcerts";
import type { MarkerStyle } from "../types/tour";

interface MapMarkersProps {
  concerts: Concert[];
  selectedConcert?: Concert | null;
  currentMarkerStyle?: MarkerStyle | null;
  onConcertClick?: (concert: Concert) => void;
}

const defaultMarkerStyle: MarkerStyle = {
  width: 12,
  height: 12,
  backgroundColor: "#1976d2",
  border: "2px solid white",
  boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
  borderRadius: "50%",
  transition: "all 0.2s ease-in-out",
};

const MapMarkers: React.FC<MapMarkersProps> = ({
  concerts,
  selectedConcert,
  currentMarkerStyle,
  onConcertClick,
}) => {
  const map = useMap();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [infoWindowConcert, setInfoWindowConcert] = useState<Concert | null>(
    null
  );
  const [isLoadingContext, setIsLoadingContext] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState<GeminiResponse | null>(
    null
  );
  const [error, setError] = useState<string>("");
  const [pulsingMarker, setPulsingMarker] = useState<string | null>(null);
  const [tooltipConcert, setTooltipConcert] = useState<Concert | null>(null);
  const [infoWindowAnchor, setInfoWindowAnchor] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  // Inject custom styles for InfoWindow in dark mode
  useEffect(() => {
    const styleId = "infowindow-dark-mode-styles";
    let styleElement = document.getElementById(
      styleId
    ) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    if (isDark) {
      styleElement.textContent = `
        .gm-style .gm-style-iw-c {
          background-color: #1e1e1e !important;
          box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.5) !important;
        }
        .gm-style .gm-style-iw-d {
          overflow: auto !important;
        }
        .gm-style .gm-style-iw-t::after {
          background: #1e1e1e !important;
          box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, 0.3) !important;
        }
        .gm-ui-hover-effect {
          opacity: 1 !important;
        }
        .gm-ui-hover-effect > span {
          background-color: #ffffff !important;
        }
      `;
    } else {
      styleElement.textContent = "";
    }

    return () => {
      // Cleanup on unmount
      const el = document.getElementById(styleId);
      if (el) {
        el.textContent = "";
      }
    };
  }, [isDark]);

  // Close InfoWindow when concerts change (new tour or place selected)
  useEffect(() => {
    setInfoWindowConcert(null);
    setGeminiResponse(null);
    setIsLoadingContext(false);
    setError("");
    setInfoWindowAnchor(null);
  }, [concerts]);

  // Auto-fit bounds when concerts change
  useEffect(() => {
    if (!map || concerts.length === 0) return;

    const bounds = new google.maps.LatLngBounds();
    concerts.forEach((c) => bounds.extend({ lat: c.lat, lng: c.lng }));

    if (concerts.length === 1) {
      map.setCenter({ lat: concerts[0].lat, lng: concerts[0].lng });
      map.setZoom(10);
    } else {
      map.fitBounds(bounds);
      map.panBy(0, 0);
    }
  }, [map, concerts]);

  // Handle marker pulsing when selected
  useEffect(() => {
    if (selectedConcert) {
      const markerKey = `${selectedConcert.date}-${selectedConcert.venue}`;
      setPulsingMarker(markerKey);
      setTooltipConcert(selectedConcert);

      // Stop pulsing after 3 seconds
      const timer = setTimeout(() => {
        setPulsingMarker(null);
        setTooltipConcert(null);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      // Clear pulsing when no concert is selected
      setPulsingMarker(null);
      setTooltipConcert(null);
    }
  }, [selectedConcert]);

  const handleMarkerClick = useCallback(async (concert: Concert) => {
    setInfoWindowConcert(concert);
    setIsLoadingContext(true);
    setGeminiResponse(null);
    setError("");

    try {
      const data = await fetchGeminiContext(concert);
      setGeminiResponse(data);
    } catch {
      // Debug: Gemini fetch error - can be enabled for debugging
      // console.error('❌ Gemini fetch error:', err);
      setError("Failed to load historical context. Please try again.");
    } finally {
      setIsLoadingContext(false);
    }
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowConcert(null);
    setGeminiResponse(null);
    setIsLoadingContext(false);
    setError("");
    setInfoWindowAnchor(null);
  }, []);

  const handleNavigateToConcert = useCallback(async (concert: Concert) => {
    setInfoWindowConcert(concert);
    setIsLoadingContext(true);
    setGeminiResponse(null);
    setError("");

    try {
      const data = await fetchGeminiContext(concert);
      setGeminiResponse(data);
    } catch {
      // Debug: Gemini fetch error - can be enabled for debugging
      // console.error('❌ Gemini fetch error:', err);
      setError("Failed to load historical context. Please try again.");
    } finally {
      setIsLoadingContext(false);
    }
  }, []);

  const handlePreviousConcert = useCallback(async () => {
    if (!infoWindowConcert) return;

    const currentIndex = concerts.findIndex(
      (c) =>
        c.date === infoWindowConcert.date && c.venue === infoWindowConcert.venue
    );

    if (currentIndex > 0) {
      const previousConcert = concerts[currentIndex - 1];
      await handleNavigateToConcert(previousConcert);
    }
  }, [infoWindowConcert, concerts, handleNavigateToConcert]);

  const handleNextConcert = useCallback(async () => {
    if (!infoWindowConcert) return;

    const currentIndex = concerts.findIndex(
      (c) =>
        c.date === infoWindowConcert.date && c.venue === infoWindowConcert.venue
    );

    if (currentIndex < concerts.length - 1) {
      const nextConcert = concerts[currentIndex + 1];
      await handleNavigateToConcert(nextConcert);
    }
  }, [infoWindowConcert, concerts, handleNavigateToConcert]);

  const currentConcertIndex = infoWindowConcert
    ? concerts.findIndex(
        (c) =>
          c.date === infoWindowConcert.date &&
          c.venue === infoWindowConcert.venue
      )
    : -1;
  const canGoPrevious = currentConcertIndex > 0;
  const canGoNext = currentConcertIndex < concerts.length - 1;

  return (
    <>
      {concerts.map((concert, index) => {
        const isPulsing = pulsingMarker === `${concert.date}-${concert.venue}`;
        const isTooltipVisible =
          tooltipConcert?.date === concert.date &&
          tooltipConcert?.venue === concert.venue;
        const isInfoWindowOpen =
          infoWindowConcert?.date === concert.date &&
          infoWindowConcert?.venue === concert.venue;
        const style = currentMarkerStyle ?? defaultMarkerStyle;

        const isFirstConcert = index === 0;
        const isLastConcert = index === concerts.length - 1;

        return (
          <AdvancedMarker
            aria-label={`Concert marker for ${concert.venue} in ${
              concert.city
            }, ${concert.country} on ${new Date(
              concert.date
            ).toLocaleDateString()}`}
            key={`${concert.date}-${concert.venue}-${index}`}
            position={{ lat: concert.lat, lng: concert.lng }}
            title={`${concert.city}, ${concert.country} - ${
              concert.venue
            } (${new Date(concert.date).toLocaleDateString()})`}
            zIndex={isTooltipVisible || isInfoWindowOpen ? 10000 : null}
            ref={(marker) => {
              if (isInfoWindowOpen && marker) {
                setInfoWindowAnchor(marker);
              }
            }}
            onClick={() => {
              void handleMarkerClick(concert);
              onConcertClick?.(concert);
            }}
            onMouseEnter={() => setTooltipConcert(concert)}
            onMouseLeave={() => setTooltipConcert(null)}
          >
            <div
              style={{
                ...style,
                width: style.width,
                height: style.height,
                backgroundColor: isPulsing ? "#ff1744" : style.backgroundColor,
                border: isPulsing ? "4px solid #ffffff" : style.border,
                boxShadow: isPulsing
                  ? "0 0 40px rgba(255, 23, 68, 1), 0 0 80px rgba(255, 23, 68, 0.8), " +
                    "0 0 120px rgba(255, 23, 68, 0.6), 0 0 160px rgba(255, 23, 68, 0.4)"
                  : style.boxShadow,
                transform: isPulsing ? "scale(1.5)" : "scale(1)",
                opacity: style.opacity ?? 1,
                borderRadius: style.borderRadius,
                transition: isPulsing
                  ? "all 0.15s ease-in-out"
                  : "all 0.1s ease-in-out",
                cursor: "pointer",
                position: "relative",
                animation: isPulsing ? "strongPulse 0.6s infinite" : "none",
              }}
            />

            {/* Tour progression indicator */}
            {isFirstConcert && (
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "#4caf50",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px rgba(76, 175, 80, 0.8)",
                  animation: "pulse 2s infinite",
                }}
              />
            )}

            {isLastConcert && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "#f44336",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px rgba(244, 67, 54, 0.8)",
                  animation: "pulse 2s infinite",
                }}
              />
            )}

            {/* Beautiful Tooltip */}
            {isTooltipVisible && (
              <div
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  color: "white",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  zIndex: 1000,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  animation: "fadeIn 0.2s ease-out",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                    {concert.city}, {concert.country}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: 0.9,
                      marginBottom: "2px",
                    }}
                  >
                    {concert.venue}
                  </div>
                  <div style={{ fontSize: "11px", opacity: 0.8 }}>
                    {new Date(concert.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
                {/* Tooltip arrow */}
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "6px solid rgba(0, 0, 0, 0.9)",
                  }}
                />
              </div>
            )}
          </AdvancedMarker>
        );
      })}

      {infoWindowConcert && infoWindowAnchor && (
        <InfoWindow
          aria-label={`Concert information for ${infoWindowConcert.venue} in ${infoWindowConcert.city}`}
          maxWidth={450}
          anchor={infoWindowAnchor}
          onCloseClick={handleInfoWindowClose}
        >
          <Box
            sx={{
              p: 0,
              minWidth: 350,
              maxWidth: 450,
              backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
              color: isDark ? "#ffffff" : "#000000",
              borderRadius: 1,
            }}
          >
            {/* Content */}
            <Box sx={{ p: 2, pt: 1.5 }}>
              {/* Header */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 0.5,
                    fontSize: "1.1rem",
                  }}
                  variant="h6"
                >
                  {infoWindowConcert.city}, {infoWindowConcert.country}
                </Typography>
                <Chip
                  aria-label={`Tour: ${infoWindowConcert.tour}`}
                  color="primary"
                  label={infoWindowConcert.tour}
                  size="small"
                  sx={{ fontSize: "0.75rem" }}
                  variant="outlined"
                />
              </Box>

              {/* Context Block */}
              <Box
                sx={{
                  mb: 2,
                  p: 1.5,
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "grey.50",
                  borderRadius: 1,
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid #e0e0e0",
                  maxHeight: 180, // Adjust as needed
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: 6,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.2)",
                    borderRadius: 3,
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Clock
                    aria-hidden="true"
                    color={isDark ? "#ffb74d" : "#f57c00"}
                    size={16}
                  />
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                    variant="body2"
                  >
                    Historical Context
                  </Typography>
                </Box>

                {isLoadingContext && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress
                      aria-label="Loading historical context"
                      size={16}
                    />
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.8rem",
                      }}
                      variant="body2"
                    >
                      Loading historical context...
                    </Typography>
                  </Box>
                )}
                {!isLoadingContext && error && (
                  <Alert
                    aria-live="polite"
                    role="alert"
                    severity="error"
                    sx={{ fontSize: "0.8rem", py: 0.5 }}
                  >
                    {error}
                  </Alert>
                )}
                {!isLoadingContext && !error && geminiResponse && (
                  <>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        lineHeight: 1.5,
                        mb: 1,
                      }}
                      variant="body2"
                    >
                      {geminiResponse.content}
                    </Typography>
                    {geminiResponse.keywords?.length > 0 && (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mt: 1,
                        }}
                      >
                        {geminiResponse.keywords.map((keyword, index) => (
                          <Chip
                            aria-label={`Keyword: ${keyword}`}
                            key={index}
                            label={keyword}
                            size="small"
                            sx={{ fontSize: "0.7rem", height: 20 }}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    )}
                  </>
                )}
                {!isLoadingContext && !error && !geminiResponse && (
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                    }}
                    variant="body2"
                  >
                    Click to load historical context for this performance.
                  </Typography>
                )}
              </Box>

              {/* Metadata */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}
              >
                <MusicNote
                  aria-hidden="true"
                  color={isDark ? "#ffb74d" : "#f57c00"}
                  size={16}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    color: "text.primary",
                  }}
                  variant="body2"
                >
                  {infoWindowConcert.venue}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}
              >
                <CalendarToday
                  aria-hidden="true"
                  color={isDark ? "#64b5f6" : "#1976d2"}
                  size={16}
                />
                <IconButton
                  aria-label={
                    canGoPrevious
                      ? "Go to previous concert"
                      : "No previous concert available"
                  }
                  disabled={!canGoPrevious}
                  size="small"
                  sx={{
                    color: canGoPrevious ? "primary.main" : "text.disabled",
                    p: 0.5,
                    ml: 0.5,
                    mr: 0.5,
                    "&:hover": canGoPrevious
                      ? {
                          backgroundColor: "primary.50",
                        }
                      : {},
                  }}
                  onClick={() => {
                    void handlePreviousConcert();
                  }}
                >
                  <ChevronLeft aria-hidden="true" size={18} />
                </IconButton>
                <Typography
                  sx={{ fontSize: "0.875rem", color: "text.secondary" }}
                  variant="body2"
                >
                  {new Date(infoWindowConcert.date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </Typography>
                <IconButton
                  aria-label={
                    canGoNext
                      ? "Go to next concert"
                      : "No next concert available"
                  }
                  disabled={!canGoNext}
                  size="small"
                  sx={{
                    color: canGoNext ? "primary.main" : "text.disabled",
                    p: 0.5,
                    ml: 0.5,
                    "&:hover": canGoNext
                      ? {
                          backgroundColor: "primary.50",
                        }
                      : {},
                  }}
                  onClick={() => {
                    void handleNextConcert();
                  }}
                >
                  <ChevronRight aria-hidden="true" size={18} />
                </IconButton>
              </Box>

              {infoWindowConcert.leg && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <MapPin
                    aria-hidden="true"
                    color={isDark ? "#81c784" : "#4caf50"}
                    size={16}
                  />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: "text.primary",
                    }}
                    variant="body2"
                  >
                    Leg {infoWindowConcert.leg}
                  </Typography>
                </Box>
              )}

              {infoWindowConcert.event && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MusicNote
                    aria-hidden="true"
                    color={isDark ? "#ba68c8" : "#9c27b0"}
                    size={16}
                  />
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "text.secondary" }}
                    variant="body2"
                  >
                    {infoWindowConcert.event}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </InfoWindow>
      )}
    </>
  );
};

export default MapMarkers;
