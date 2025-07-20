import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import React, {useState, Suspense} from 'react';
import {Provider} from 'react-redux';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import {tours} from './data/tours';
import {useAccessibility} from './hooks/useAccessibility';
import {useAppSelector, useAppDispatch} from './hooks/useRedux';
import {store} from './store';
import {setCurrentStep} from './store/navigationSlice';
import {createAppTheme} from './theme';

// Lazy load components for code splitting
const HomePage = React.lazy(() => import('./components/HomePage'));
const Layout = React.lazy(() => import('./components/Layout'));
const ErrorBoundary = React.lazy(() => import('./components/ErrorBoundary'));

// Loading component for Suspense fallback
const LoadingFallback: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.2rem',
      color: 'text.secondary',
    }}
  >
    Loading...
  </Box>
);

const ThemedApp: React.FC = () => {
  const {darkMode, fontSize} = useAppSelector((state) => state.navigation);
  const theme = React.useMemo(() => createAppTheme(darkMode, fontSize), [darkMode, fontSize]);
  const {announcementRef} = useAccessibility();
  const dispatch = useAppDispatch();
  const [showHome, setShowHome] = useState(true);

  const handleStart = (): void => {
    // Set the first tour (Early Irish Shows) when transitioning from home
    const firstTour = tours.find(t => t.step === 1);
    if (firstTour) {
      dispatch(setCurrentStep(1));
      // Update URL to show the first tour
      const url = new URL(window.location.href);
      url.searchParams.set('tour', encodeURIComponent(firstTour.tour));
      window.history.replaceState({}, '', url.toString());
    }
    setShowHome(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Screen reader announcements */}
      <Box
        aria-atomic="true"
        aria-live="polite"
        ref={announcementRef}
        sx={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />

      {/* Show Home Page or Main App */}
      <Suspense fallback={<LoadingFallback />}>
        {showHome ? (
          <ErrorBoundary>
            <HomePage onStart={handleStart} />
          </ErrorBoundary>
        ) : (
          <ErrorBoundary>
            <Layout onHomeClick={() => setShowHome(true)} />
          </ErrorBoundary>
        )}
      </Suspense>
    </ThemeProvider>
  );
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );
}

export default App;
