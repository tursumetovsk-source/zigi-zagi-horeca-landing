import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { SmoothScroll } from '@/components/animations/SmoothScroll';

export const metadata: Metadata = {
  title: 'ZIGI-ZAGI HoReCa — Оптовые поставки напитков по Казахстану',
  description:
    'Премиальные лимонады, мохито, холодные чаи и вода ZIGI-ZAGI для ресторанов, кафе, баров и ритейла по всему Казахстану. Официальные поставки, договор, скидки от объёма.',
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
    title: 'ZIGI-ZAGI HoReCa — Оптовые поставки напитков по Казахстану',
    description:
      'Премиальные лимонады, мохито, холодные чаи и вода ZIGI-ZAGI для ресторанов, кафе, баров и ритейла.',
    url: 'https://zigi-zagi.kz',
    siteName: 'ZIGI-ZAGI HORECA',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#E9E7DC] text-[#000000] selection:bg-[#B8223A] selection:text-white font-body">
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
