import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(err) {
    // if any child throws error, catch it here
    return {
      hasErrored: true
    };
  }
  componentDidCatch(err, info) {
    console.log(err);
  }
  render() {
    if (this.state.hasErrored) {
      return <div> Error! Smth wrong..</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
