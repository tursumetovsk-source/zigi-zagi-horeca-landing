'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const { t } = useLanguage();
  const [pulsed, setPulsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulsed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const el = document.querySelector('#cities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
      <button
        onClick={handleClick}
        className={`group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#B8223A] hover:bg-[#931B2E] text-[#E9E7DC] font-extrabold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#E9E7DC]/30 ${
          !pulsed ? 'animate-pulse' : ''
        }`}
        aria-label="Выбрать город"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9E7DC] opacity-75" />
          <MapPin className="w-5 h-5 text-[#E9E7DC] relative z-10" />
        </span>
        <span className="inline text-xs font-black uppercase tracking-wider">
          {t.hero.selectCityBtn}
        </span>
      </button>
    </div>
  );
};
