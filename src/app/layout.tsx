import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { SmoothScroll } from '@/components/animations/SmoothScroll';

const siteUrl = 'https://zigi-zagi-horeca.vercel.app';
const siteTitle = 'ZIGI-ZAGI HoReCa — Оптовые поставки напитков по Казахстану';
const siteDescription =
  'Премиальные лимонады, мохито, холодные чаи и вода ZIGI-ZAGI для ресторанов, кафе, баров и ритейла по всему Казахстану. Официальные поставки, договор, скидки от объёма.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'ZIGI ZAGI',
    'Zigi Zagi HoReCa',
    'оптовые поставки напитков Казахстан',
    'лимонады оптом Алматы',
    'напитки для ресторанов',
    'мохито оптом Астана',
  ],
  authors: [{ name: 'ZIGI-ZAGI BEVERAGES' }],
  openGraph: {
    title: siteTitle,
    description:
      'Премиальные лимонады, мохито, холодные чаи и вода ZIGI-ZAGI для ресторанов, кафе, баров и ритейла.',
    url: '/',
    siteName: 'ZIGI-ZAGI HORECA',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/assets/products/zigi-hero-custom.webp',
        width: 1024,
        height: 1536,
        alt: 'Напиток ZIGI-ZAGI для HoReCa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/assets/products/zigi-hero-custom.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/icon.svg?v=2', type: 'image/svg+xml' }],
    shortcut: [{ url: '/icon.svg?v=2', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg?v=2', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#E9E7DC] text-[#000000] selection:bg-[#B8223A] selection:text-white font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${siteUrl}/#organization`,
                  name: 'ZIGI-ZAGI BEVERAGES',
                  url: siteUrl,
                  logo: `${siteUrl}/icon.svg`,
                  telephone: '+7-700-800-90-90',
                  email: 'horeca@zigi-zagi.kz',
                  areaServed: {
                    '@type': 'Country',
                    name: 'Казахстан',
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+7-700-800-90-90',
                    contactType: 'sales',
                    availableLanguage: ['ru'],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${siteUrl}/#website`,
                  url: siteUrl,
                  name: 'ZIGI-ZAGI HoReCa',
                  publisher: {
                    '@id': `${siteUrl}/#organization`,
                  },
                  inLanguage: 'ru-RU',
                },
              ],
            }),
          }}
        />
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
