export interface TrackWhatsAppClickParams {
  source: string;
  city?: string;
  language: string;
}

export function trackWhatsAppClick({ source, city, language }: TrackWhatsAppClickParams) {
  if (typeof window === 'undefined') return;

  const cityId = city || 'none';
  const eventData = {
    event_category: 'conversion',
    event_label: source,
    city: cityId,
    language,
    timestamp: new Date().toISOString(),
  };

  // Google Analytics 4
  if (typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
    ((window as unknown as Record<string, unknown>).gtag as Function)('event', 'whatsapp_click', eventData);
  }

  // Meta Pixel
  if (typeof (window as unknown as Record<string, unknown>).fbq === 'function') {
    ((window as unknown as Record<string, unknown>).fbq as Function)('track', 'Contact', {
      content_name: 'whatsapp',
      wa_city: cityId,
      button_place: source,
    });
  }

  // Microsoft Clarity
  if (typeof (window as unknown as Record<string, unknown>).clarity === 'function') {
    const clarity = (window as unknown as Record<string, unknown>).clarity as Function;
    clarity('event', `whatsapp_${cityId}`);
    clarity('set', 'city', cityId);
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
