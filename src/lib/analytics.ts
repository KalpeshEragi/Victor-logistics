"use client";

/**
 * Analytics Tracking Utility
 * 
 * Usage:
 * trackEvent({ type: 'click', element: 'hero-btn', label: 'Get Started' });
 */

export type EventType = "page_view" | "click" | "form_submit";

interface TrackOptions {
  type: EventType;
  element?: string;
  label?: string;
  metadata?: Record<string, any>;
}

export const trackEvent = async (options: TrackOptions) => {
  if (typeof window === "undefined") return;

  try {
    const payload = {
      ...options,
      page: window.location.pathname,
    };

    // Use sendBeacon if available for better reliability on page unload
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon('/api/track', blob);
    } else {
      // Fallback to fetch
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        // Keep-alive allows the request to continue even if the page is closed
        keepalive: true,
      }).catch(err => console.warn('Analytics failed:', err));
    }
  } catch (err) {
    // Analytics should never break the main app flow
    console.warn('Tracking error:', err);
  }
};
