import {Box, Typography, Button} from '@mui/material';
import {RefreshCw, AlertTriangle} from 'lucide-react';
import React, {Component, type ReactNode} from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error): State {
    return {hasError: true, error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error to console in development
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // In production, you could send to error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({hasError: false, error: undefined});
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            textAlign: 'center',
            minHeight: '200px',
          }}
        >
          <AlertTriangle color="#f44336" size={48} style={{marginBottom: '16px'}} />
          <Typography sx={{mb: 2, color: 'error.main'}} variant="h6">
            Something went wrong
          </Typography>
          <Typography sx={{mb: 3, color: 'text.secondary'}} variant="body2">
            We encountered an unexpected error. Please try refreshing the page.
          </Typography>
          <Button
            startIcon={<RefreshCw size={16} />}
            sx={{mb: 2}}
            variant="contained"
            onClick={this.handleRetry}
          >
            Try Again
          </Button>
          <Typography sx={{color: 'text.disabled'}} variant="caption">
            Error: {this.state.error?.message}
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
