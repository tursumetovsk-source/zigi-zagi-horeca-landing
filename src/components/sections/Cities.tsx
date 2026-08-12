'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { ArrowUpRight, Clock } from 'lucide-react';

interface RegionalCard {
  id: string;
  titleRu: string;
  titleKz: string;
  citiesRu: string;
  citiesKz: string;
  regionKey: string;
}

export const Cities: React.FC = () => {
  const { language } = useLanguage();

  const regionalCards: RegionalCard[] = [
    {
      id: 'almaty',
      titleRu: 'Алматы',
      titleKz: 'Алматы',
      citiesRu: 'Алматы · Конаев · Талдыкорган',
      citiesKz: 'Алматы · Қонаев · Талдықорған',
      regionKey: 'almaty',
    },
    {
      id: 'center',
      titleRu: 'Центр',
      titleKz: 'Орталық',
      citiesRu: 'Астана · Караганда · Темиртау · Жезказган',
      citiesKz: 'Астана · Қарағанды · Теміртау · Жезқазған',
      regionKey: 'center',
    },
    {
      id: 'south',
      titleRu: 'Юг',
      titleKz: 'Оңтүстік',
      citiesRu: 'Шымкент · Тараз · Кызылорда · Туркестан',
      citiesKz: 'Шымкент · Тараз · Қызылорда · Түркістан',
      regionKey: 'south',
    },
    {
      id: 'west',
      titleRu: 'Запад',
      titleKz: 'Батыс',
      citiesRu: 'Атырау · Актау · Актобе',
      citiesKz: 'Атырау · Ақтау · Ақтөбе',
      regionKey: 'west',
    },
    {
      id: 'north',
      titleRu: 'Север',
      titleKz: 'Солтүстік',
      citiesRu: 'Костанай · Петропавловск · Кокшетау',
      citiesKz: 'Қостанай · Петропавл · Көкшетау',
      regionKey: 'north',
    },
    {
      id: 'east',
      titleRu: 'Восток',
      titleKz: 'Шығыс',
      citiesRu: 'Усть-Каменогорск · Семей · Павлодар',
      citiesKz: 'Өскемен · Семей · Павлодар',
      regionKey: 'east',
    },
  ];

  const handleRegionClick = (card: RegionalCard) => {
    const regionName = language === 'ru' ? card.titleRu : card.titleKz;
    trackWhatsAppClick({ source: `region_${card.id}`, city: regionName, language });
    const url = createWhatsAppLink({
      city: regionName,
      language,
      source: `region_${card.id}`,
    });
    window.open(url, '_blank');
  };

  return (
    <section
      id="cities"
      className="relative w-full bg-[#E9E7DC] text-[#000000] py-16 sm:py-20 px-4 md:px-8 overflow-hidden select-none border-t border-[#000000]/10"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      <div className="max-w-[1294px] mx-auto relative z-10">
        {/* Compact Responsive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#B8223A] uppercase leading-[0.95] max-w-2xl font-bold tracking-wider">
              {language === 'ru'
                ? 'Свяжитесь с представителем в вашем городе'
                : 'Өз қалаңыздағы өкілмен байланысыңыз'}
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="font-body text-xs sm:text-sm md:text-base font-semibold text-[#000000]/70">
              {language === 'ru' ? '20 городов по регионам' : 'Аймақтар бойынша 20 қала'}
            </span>
          </div>
        </div>

        {/* Crimson #B8223A Cards with Milky White #E9E7DC Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleRegionClick(card)}
              className="group p-6 sm:p-8 rounded-[2.5rem] bg-[#B8223A] border-3 border-[#000000] shadow-[5px_5px_0px_#000000] hover:scale-103 hover:bg-[#931B2E] transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-pointer"
            >
              {/* Top Row: Milky White Icon Container */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-full bg-[#E9E7DC] flex items-center justify-center text-[#B8223A] shadow-md group-hover:scale-110 transition-transform">
                  <Clock className="w-5.5 h-5.5 stroke-[2.5]" />
                </div>
              </div>

              {/* Middle Row: Milky White Title & Subtitle Cities */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#E9E7DC] uppercase tracking-wide mb-1.5 drop-shadow-sm font-bold">
                  {language === 'ru' ? card.titleRu : card.titleKz}
                </h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#E9E7DC]/90 leading-relaxed">
                  {language === 'ru' ? card.citiesRu : card.citiesKz}
                </p>
              </div>

              {/* Bottom Right Milky White Arrow Indicator */}
              <div className="flex justify-end pt-2">
                <ArrowUpRight className="w-6 h-6 text-[#E9E7DC] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
