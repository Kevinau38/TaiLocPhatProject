const ANALYTICS_KEY = 'tlp_analytics';
interface AnalyticsEvent {
  type: string;
  timestamp: number;
  data: unknown;
  path: string;
}
export function logEvent(type: string, data: unknown = {}) {
  try {
    const existingEvents: AnalyticsEvent[] = JSON.parse(localStorage.getItem(ANALYTICS_KEY) || '[]');
    const newEvent: AnalyticsEvent = {
      type,
      timestamp: Date.now(),
      data,
      path: window.location.pathname,
    };
    existingEvents.push(newEvent);
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(existingEvents));
  } catch (error) {
    console.error('Failed to log analytics event:', error);
  }
}
export function trackPageView(path: string) {
  logEvent('page_view', { path });
}