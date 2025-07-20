import {useEffect, useCallback, useState} from 'react';

import {tours} from '../data/tours';
import {setCurrentStep} from '../store/navigationSlice';

import {useAppDispatch} from './useRedux';

// Debug logging function - can be easily disabled
const debugLog = (_message: string, ..._args: unknown[]): void => {
  // Disabled for production - can be enabled for debugging
  // console.log(_message, ..._args);
};

interface URLState {
  tour?: string;
  leg?: number;
}

interface URLStateReturn {
  updateURL: (tour?: string, leg?: number) => void;
  parseURLState: () => URLState;
}

export const useURLState = (): URLStateReturn => {
  const dispatch = useAppDispatch();
  const [isInitializing, setIsInitializing] = useState(true);

  // Parse URL parameters
  const parseURLState = useCallback((): URLState => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tour');
    const legParam = urlParams.get('leg');

    const tour = tourParam ? decodeURIComponent(tourParam.replace(/\+/g, ' ')) : undefined;
    const leg = legParam ? parseInt(legParam, 10) : undefined;

    return {tour, leg};
  }, []);

  // Update URL with current state
  const updateURL = useCallback((tour?: string, leg?: number): void => {
    // Don't update URL during initialization
    if (isInitializing) {
      debugLog('🔗 URL State: Skipping URL update during initialization');
      return;
    }

    const url = new URL(window.location.href);

    if (tour) {
      // Properly encode tour names for URL
      const encodedTour = encodeURIComponent(tour);
      url.searchParams.set('tour', encodedTour);
      debugLog('🔗 URL State: Updating URL with tour:', tour, 'encoded as:', encodedTour);
    } else {
      url.searchParams.delete('tour');
      debugLog('🔗 URL State: Removing tour from URL');
    }

    if (leg !== undefined) {
      url.searchParams.set('leg', leg.toString());
      debugLog('🔗 URL State: Adding leg to URL:', leg);
    } else {
      url.searchParams.delete('leg');
      debugLog('🔗 URL State: Removing leg from URL');
    }

    // Update URL without page reload
    window.history.replaceState({}, '', url.toString());
  }, [isInitializing]);

  // Initialize state from URL on app load
  useEffect(() => {
    const {tour} = parseURLState();

    if (tour) {
      debugLog('🔗 URL State: Parsed tour from URL:', tour);
      const tourData = tours.find(t => t.tour === tour);
      if (tourData) {
        debugLog('✅ URL State: Found tour data, setting step:', tourData.step);
        dispatch(setCurrentStep(tourData.step));
      } else {
        debugLog('❌ URL State: Tour not found in data:', tour);
        debugLog('Available tours:', tours.map(t => t.tour));
      }
    }

    // Mark initialization as complete
    setIsInitializing(false);
  }, [dispatch, parseURLState]);

  return {
    updateURL,
    parseURLState,
  };
};
