
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  
  static getDerivedStateFromError(error) {
    return {hasError: true};
  };
  componentDidCatch(error, errorInfo) {
    // A custom error logging function
    logError(error, errorInfo);
  };
  render() {
    return this.state.hasError ? <FallbackUI /> : this.props.children;
  }
}