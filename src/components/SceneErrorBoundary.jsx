"use client";

import { Component } from "react";


/**
 * If the 3D scene can't be created (no WebGL, a failed asset, a lost GPU context...) the rest of the page keeps working
 * and visitors get a way to the regular portfolio instead of a blank screen
 */
class SceneErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("The 3D scene crashed:", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        role="alert"
        className="fixed inset-0 z-[80] grid place-items-center bg-background p-6 text-center"
      >
        <div className="flex max-w-md flex-col items-center gap-4">
          <span className="font-emoji text-6xl" aria-hidden>
            🛰️
          </span>
          <h2 className="text-2xl font-bold">The 3D scene couldn't start</h2>
          <p className="text-sm text-muted-foreground">
            Your browser or device may not support WebGL.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SceneErrorBoundary;
