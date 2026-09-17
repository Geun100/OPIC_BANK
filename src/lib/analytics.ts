import posthog from 'posthog-js';

type AnalyticsProperties = Record<string, boolean | number | string | null | undefined>;

export const analytics = {
  capture(event: string, properties?: AnalyticsProperties) {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;
    posthog.capture(event, properties);
  },

  identify(userId: string, properties?: AnalyticsProperties) {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;
    posthog.identify(userId, properties);
  },

  reset() {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;
    posthog.reset();
  },
};
