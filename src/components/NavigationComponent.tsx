// src/components/NavigationComponent.tsx
import {Box, Button, Typography, LinearProgress, Tooltip} from '@mui/material';
import {ArrowLeftRight, ChevronLeft, ChevronRight} from 'lucide-react';
import React from 'react';

import {tours} from '../data/tours';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {nextStep, prevStep, setActiveSection, setCurrentStep} from '../store/navigationSlice';

const NavigationComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const {currentStep, totalSteps} = useAppSelector(
    (state) => state.navigation,
  );

  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleFirstTour = (): void => {
    dispatch(setActiveSection('home'));
  };
  const handleNext = (): void => {
    dispatch(nextStep());
  };
  const handlePrev = (): void => {
    dispatch(prevStep());
  };

  const handleStepClick = (stepNumber: number): void => {
    if (stepNumber !== currentStep) {
      dispatch(setCurrentStep(stepNumber));
    }
  };

  const isFirst = currentStep === 1;
  const isLast = currentStep === totalSteps;

  return (
    <Box
      aria-label="Content navigation"
      component="nav"
      id="navigation"
      role="navigation"
      sx={{p: 2, backgroundColor: 'background.paper', py: {xs: 2, sm: 1.5}}}
    >
      {/* Progress Bar */}
      <Box
        aria-label="Progress indicators"
        role="region"
        sx={{mb: {xs: 1.5, md: 2}}}
      >
        <LinearProgress
          aria-label={`Progress: step ${currentStep} of ${totalSteps}`}
          aria-valuemax={totalSteps}
          aria-valuemin={1}
          aria-valuenow={currentStep}
          role="progressbar"
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: 'divider',
            overflow: 'hidden',
            '& .MuiLinearProgress-bar': {
              borderRadius: 2,
              backgroundColor: 'primary.main',
            },
          }}
          value={progressPercentage}
          variant="determinate"
        />

        {/* Clickable Step Bars */}
        <Box
          role="presentation"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: {xs: 0.5, md: 0.75},
          }}
        >
          {Array.from({length: totalSteps}, (_, i) => {
            const stepNumber = i + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isAccessible = stepNumber <= currentStep;
            const tour = tours.find(t => t.step === stepNumber);

            return (
              <Tooltip
                arrow
                key={i}
                placement="top"
                title={tour ? `${tour.title} (Step ${stepNumber})` : `Step ${stepNumber}`}
              >
                <Box
                  aria-current={isCurrent ? 'step' : undefined}
                  aria-label={
                    isAccessible
                      ? `Jump to ${tour?.title ?? `step ${stepNumber}`}`
                      : `${tour?.title ?? `Step ${stepNumber}`} (not yet accessible)`
                  }
                  aria-pressed={isCurrent}
                  role="button"
                  sx={{
                    width: `${100 / totalSteps}%`,
                    height: 8,
                    backgroundColor: (() => {
                      if (isCompleted) return 'primary.main';
                      if (isCurrent) return 'primary.light';
                      return 'divider';
                    })(),
                    borderRadius: 1,
                    mx: {xs: 0.125, md: 0.25},
                    cursor: isAccessible ? 'pointer' : 'default',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    '&:hover': isAccessible ? {
                      backgroundColor: (() => {
                        if (isCompleted) return 'primary.dark';
                        if (isCurrent) return 'primary.main';
                        return 'primary.light';
                      })(),
                      transform: 'scaleY(1.2)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    } : {},
                    '&:active': isAccessible ? {
                      transform: 'scaleY(0.9)',
                    } : {},
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary.main',
                      outlineOffset: '2px',
                    },
                  }}
                  tabIndex={isAccessible ? 0 : -1}
                  onClick={() => handleStepClick(stepNumber)}
                />
              </Tooltip>
            );
          })}
        </Box>
      </Box>

      {/* Navigation Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: {xs: 2, md: 3},
        }}
      >
        {/* First Tour */}
        <Button
          aria-label={
            isFirst
              ? 'Go to first tour (disabled - already at first tour)'
              : 'Go to first tour'
          }
          disabled={isFirst}
          startIcon={<ArrowLeftRight aria-hidden="true" size={18} />}
          sx={navButtonSx()}
          variant="text"
          onClick={handleFirstTour}
        >
          Start
        </Button>

        {/* Counter */}
        <Typography
          aria-label={`Currently on step ${currentStep} of ${totalSteps}`}
          aria-live="polite"
          sx={{
            color: 'text.primary',
            px: 3,
            py: 1.5,
            backgroundColor: 'surfaceVariant',
          }}
          variant="body2"
        >
          {currentStep} / {totalSteps}
        </Typography>

        {/* Prev / Next */}
        <Box
          aria-label="Step navigation buttons"
          role="group"
          sx={{display: 'flex', gap: 1.5}}
        >
          <Button
            aria-label={
              isFirst
                ? 'Previous step (disabled - already at first step)'
                : `Go to previous step (step ${currentStep - 1})`
            }
            disabled={isFirst}
            startIcon={<ChevronLeft aria-hidden="true" size={18} />}
            sx={navButtonSx('outlined')}
            variant="outlined"
            onClick={handlePrev}
          >
            Prev
          </Button>
          <Button
            aria-label={
              isLast
                ? 'Next step (disabled - already at last step)'
                : `Go to next step (step ${currentStep + 1})`
            }
            disabled={isLast}
            endIcon={<ChevronRight aria-hidden="true" size={18} />}
            sx={navButtonSx('contained')}
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// === Shared Button Styles ===
const navButtonSx = (variant: 'text' | 'outlined' | 'contained' = 'text'): Record<string, unknown> => {
  const common = {
    textTransform: 'none',
    minWidth: 48,
    minHeight: 48,
    px: 2,
    py: 1.25,
  };

  const focus = {
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: variant === 'contained' ? 'white' : 'primary.main',
      outlineOffset: '2px',
      boxShadow:
        variant === 'contained'
          ? '0 0 0 4px rgba(21, 101, 192, 0.3)'
          : undefined,
    },
  };

  if (variant === 'contained') {
    return {
      ...common,
      backgroundColor: 'primary.main',
      color: 'white',
      boxShadow: 'none',
      '&:hover': {backgroundColor: 'primary.dark', boxShadow: 'none'},
      '&.Mui-disabled': {opacity: 0.6},
      ...focus,
    };
  }

  if (variant === 'outlined') {
    return {
      ...common,
      color: 'text.secondary',
      background: 'transparent',
      '&:hover': {
        borderColor: 'primary.main',
        backgroundColor: 'primary.50',
        borderWidth: '1.5px',
      },
      '&.Mui-disabled': {opacity: 0.6},
      ...focus,
    };
  }

  return {
    ...common,
    color: 'primary.main',
    '&:hover': {backgroundColor: 'primary.50'},
    ...focus,
  };
};

export default NavigationComponent;
