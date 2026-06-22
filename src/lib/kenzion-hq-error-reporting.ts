type KenzionHQErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type KenzionHQEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: KenzionHQErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: KenzionHQEvents;
  }
}

export function reportKenzionHQError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
