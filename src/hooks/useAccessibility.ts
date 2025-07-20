import {useEffect, useRef, useCallback} from 'react';

import {tours} from '../data/tours';

import {useAppSelector} from './useRedux';

interface AccessibilityReturn {
  announcementRef: React.RefObject<HTMLDivElement>;
  announceLoading: (message: string) => void;
  announceError: (message: string) => void;
  announceSuccess: (message: string) => void;
}

/**
 * Custom hook for managing accessibility features like page titles and announcements
 */
export const useAccessibility = (): AccessibilityReturn => {
  const {currentStep} = useAppSelector((state) => state.navigation);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Update page title when tour changes
  useEffect(() => {
    const currentTour = tours.find((t) => t.step === currentStep);
    if (currentTour) {
      document.title = `${currentTour.title} - Signal Remains`;
    } else {
      document.title = 'Signal Remains - U2 Concert Tour Mapping';
    }
  }, [currentStep]);

  // Announce tour changes to screen readers
  useEffect(() => {
    const currentTour = tours.find((t) => t.step === currentStep);
    if (currentTour && announcementRef.current) {
      announcementRef.current.textContent = `Now viewing ${currentTour.title}`;
    }
  }, [currentStep]);

  // Announce loading states
  const announceLoading = useCallback((message: string): void => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
  }, []);

  // Announce errors
  const announceError = useCallback((message: string): void => {
    if (announcementRef.current) {
      announcementRef.current.textContent = `Error: ${message}`;
    }
  }, []);

  // Announce success
  const announceSuccess = useCallback((message: string): void => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
  }, []);

  return {
    announcementRef,
    announceLoading,
    announceError,
    announceSuccess,
  };
};
