'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Assortment } from '@/components/sections/Assortment';
import { Cooperation } from '@/components/sections/Cooperation';
import { Benefits } from '@/components/sections/Benefits';
import { Influencers } from '@/components/sections/Influencers';
import { Partners } from '@/components/sections/Partners';
import { Cities } from '@/components/sections/Cities';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloating } from '@/components/layout/WhatsAppFloating';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#050508] text-white selection:bg-emerald-500 selection:text-black">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections with key={language} for instant 0ms mobile re-render */}
      <main key={`main-${language}`} className="relative">
        {/* Block #1: Hero Scene */}
        <Hero />

        {/* Block #2: Interactive Assortment Showcase */}
        <Assortment />

        {/* Block #3: Cooperation Conditions */}
        <Cooperation />

        {/* Block #4: Business Benefits */}
        <Benefits />

        {/* Block #5a: Influencers & Media Reach */}
        <Influencers />

        {/* Block #5b: Trusted Partners */}
        <Partners />

        {/* Block #6: Kazakhstan Regional City Selector */}
        <Cities />
      </main>

      {/* Block #7: Footer */}
      <Footer key={`footer-${language}`} />

      {/* Global Floating WhatsApp Conversion Button */}
      <WhatsAppFloating key={`wa-${language}`} />
    </div>
  );
}
