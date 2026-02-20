/**
 * Google Analytics 4 Event Tracking
 * Custom events for user actions
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track App Store download button clicks
 */
export function trackAppStoreClick(params: {
  source_page: string;
  cta_location: 'hero' | 'mid-page' | 'footer' | 'inline';
  cta_text?: string;
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'app_store_click', {
      ...params,
      event_category: 'conversion',
      event_label: 'app_store_download',
    });
  }
}

/**
 * Track internal link clicks between pages
 */
export function trackInternalLinkClick(params: {
  link_text: string;
  link_url: string;
  source_page: string;
  link_type: 'related_page' | 'blog_link' | 'nav_link' | 'footer_link';
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'internal_link_click', {
      ...params,
      event_category: 'engagement',
    });
  }
}

/**
 * Track blog post views
 */
export function trackBlogView(params: {
  post_title: string;
  post_slug: string;
  post_category: 'how-to' | 'comparison' | 'announcement' | 'guide';
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_view', {
      ...params,
      event_category: 'content',
    });
  }
}

/**
 * Track scroll depth (fires at 25%, 50%, 75%, 90%)
 */
export function trackScrollDepth(depth: number, pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      depth_percentage: depth,
      page_path: pagePath,
      event_category: 'engagement',
    });
  }
}

/**
 * Track FAQ accordion opens
 */
export function trackFAQOpen(params: {
  question: string;
  page_path: string;
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'faq_open', {
      ...params,
      event_category: 'engagement',
    });
  }
}
