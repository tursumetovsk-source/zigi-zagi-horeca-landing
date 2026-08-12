export interface TrackWhatsAppClickParams {
  source: string;
  city?: string;
  language: string;
}

export function trackWhatsAppClick({ source, city, language }: TrackWhatsAppClickParams) {
  if (typeof window === 'undefined') return;

  const eventData = {
    event_category: 'conversion',
    event_label: source,
    city: city || 'unspecified',
    language,
    timestamp: new Date().toISOString(),
  };

  // Google Analytics 4
  if (typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
    ((window as unknown as Record<string, unknown>).gtag as Function)('event', 'whatsapp_click', eventData);
  }

  // Meta Pixel
  if (typeof (window as unknown as Record<string, unknown>).fbq === 'function') {
    ((window as unknown as Record<string, unknown>).fbq as Function)('trackCustom', 'WhatsAppClick', eventData);
  }

  // TikTok Pixel
  if (typeof (window as unknown as Record<string, unknown>).ttq === 'object') {
    const ttq = (window as unknown as Record<string, unknown>).ttq as { track?: Function };
    if (typeof ttq.track === 'function') {
      ttq.track('Contact', eventData);
    }
  }

  console.log('[Analytics] whatsapp_click', eventData);
}
