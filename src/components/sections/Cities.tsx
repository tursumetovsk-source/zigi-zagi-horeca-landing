'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { Clock } from 'lucide-react';

interface RegionalCard {
  id: string;
  titleRu: string;
  titleKz: string;
  cities: CityContact[];
}

interface CityContact {
  id: string;
  nameRu: string;
  nameKz: string;
  phone?: string;
}

export const Cities: React.FC = () => {
  const { language, t } = useLanguage();

  const regionalCards: RegionalCard[] = [
    {
      id: 'almaty',
      titleRu: 'Алматы',
      titleKz: 'Алматы және облыс',
      cities: [
        { id: 'almaty', nameRu: 'Алматы', nameKz: 'Алматы' },
        { id: 'konaev', nameRu: 'Конаев', nameKz: 'Қонаев' },
        { id: 'taldykorgan', nameRu: 'Талдыкорган', nameKz: 'Талдықорған', phone: '+7 701 317 9118' },
      ],
    },
    {
      id: 'center',
      titleRu: 'Центр',
      titleKz: 'Орталық',
      cities: [
        { id: 'astana', nameRu: 'Астана', nameKz: 'Астана' },
        { id: 'karaganda', nameRu: 'Караганда', nameKz: 'Қарағанды' },
        { id: 'temirtau', nameRu: 'Темиртау', nameKz: 'Теміртау' },
        { id: 'zhezkazgan', nameRu: 'Жезказган', nameKz: 'Жезқазған' },
      ],
    },
    {
      id: 'south',
      titleRu: 'Юг',
      titleKz: 'Оңтүстік',
      cities: [
        { id: 'shymkent', nameRu: 'Шымкент', nameKz: 'Шымкент' },
        { id: 'taraz', nameRu: 'Тараз', nameKz: 'Тараз', phone: '+7 705 733 1648' },
        { id: 'kyzylorda', nameRu: 'Кызылорда', nameKz: 'Қызылорда', phone: '+7 707 565 2625' },
        { id: 'turkestan', nameRu: 'Туркестан', nameKz: 'Түркістан', phone: '+7 708 213 7424' },
        { id: 'korday', nameRu: 'Кордай', nameKz: 'Қордай', phone: '+7 702 364 3548' },
      ],
    },
    {
      id: 'west',
      titleRu: 'Запад',
      titleKz: 'Батыс',
      cities: [
        { id: 'atyrau', nameRu: 'Атырау', nameKz: 'Атырау', phone: '+7 702 849 0780' },
        { id: 'aktau', nameRu: 'Актау', nameKz: 'Ақтау', phone: '+7 707 444 9648' },
        { id: 'aktobe', nameRu: 'Актобе', nameKz: 'Ақтөбе', phone: '+7 776 600 0660' },
        { id: 'uralsk', nameRu: 'Уральск', nameKz: 'Орал', phone: '+7 705 513 6333' },
      ],
    },
    {
      id: 'north',
      titleRu: 'Север',
      titleKz: 'Солтүстік',
      cities: [
        { id: 'kostanay', nameRu: 'Костанай', nameKz: 'Қостанай' },
        { id: 'petropavlovsk', nameRu: 'Петропавловск', nameKz: 'Петропавл', phone: '+7 747 307 4220' },
        { id: 'kokshetau', nameRu: 'Кокшетау', nameKz: 'Көкшетау', phone: '+7 701 733 1650' },
      ],
    },
    {
      id: 'east',
      titleRu: 'Восток',
      titleKz: 'Шығыс',
      cities: [
        { id: 'ust-kamenogorsk', nameRu: 'Усть-Каменогорск', nameKz: 'Өскемен' },
        { id: 'semey', nameRu: 'Семей', nameKz: 'Семей' },
        { id: 'pavlodar', nameRu: 'Павлодар', nameKz: 'Павлодар', phone: '+7 705 707 8822' },
      ],
    },
  ];

  const handleCityClick = (city: CityContact) => {
    const cityName = language === 'ru' ? city.nameRu : city.nameKz;
    trackWhatsAppClick({ source: `city_${city.id}`, city: cityName, language });
    const url = createWhatsAppLink({
      city: cityName,
      phone: city.phone,
      language,
      source: `city_${city.id}`,
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
            <h2 className="font-display text-[#B8223A] uppercase leading-[0.95] max-w-2xl font-bold tracking-wider">
              {language === 'ru' ? (
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Свяжитесь с представителем в вашем городе</span>
              ) : (
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Өз қалаңыздағы өкілмен хабарласыңыз</span>
              )}
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="font-body text-xs sm:text-sm md:text-base font-semibold text-[#000000]/70">
              {language === 'ru' ? '22 города по регионам' : 'Аймақтар бойынша 22 қала'}
            </span>
          </div>
        </div>

        {/* Crimson #B8223A Cards with Milky White #E9E7DC Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalCards.map((card) => (
            <div
              key={card.id}
              className="group p-6 sm:p-8 rounded-[2.5rem] bg-[#B8223A] border-3 border-[#000000] shadow-[5px_5px_0px_#000000] hover:scale-103 hover:bg-[#931B2E] transition-all duration-300 flex flex-col justify-between min-h-[200px]"
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
                <div className="flex flex-col items-start gap-1.5">
                  {card.cities.map((city) => (
                    <button
                      key={city.id}
                      type="button"
                      onClick={() => handleCityClick(city)}
                      className="text-left font-body text-xs sm:text-sm font-semibold text-[#E9E7DC]/90 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
                      aria-label={`${language === 'ru' ? 'Написать представителю в городе' : 'Қала өкіліне жазу'} ${language === 'ru' ? city.nameRu : city.nameKz}${city.phone ? `, ${city.phone}` : ''}`}
                    >
                      <span>{language === 'ru' ? city.nameRu : city.nameKz}</span>
                      {city.phone && <span className="block text-[11px] opacity-80">{city.phone}</span>}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout: "Қалаңыз жоқ па? Бізге жазыңыз" */}
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          <p className="font-body text-sm sm:text-base font-bold text-[#000000]/85 mb-3">
            {language === 'ru' ? 'Вашего города нет в списке? Напишите нам!' : 'Қалаңыз жоқ па? Бізге жазыңыз!'}
          </p>
          <button
            onClick={() => {
              trackWhatsAppClick({ source: 'cities_no_city', language });
              window.open(createWhatsAppLink({ language, source: 'cities_no_city' }), '_blank');
            }}
            className="px-8 py-3.5 rounded-full bg-[#B8223A] text-[#E9E7DC] hover:bg-[#931B2E] font-display text-lg uppercase tracking-wider font-bold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {language === 'ru' ? 'Связаться с менеджером' : 'Бізге жазыңыз'}
          </button>
        </div>
      </div>
    </section>
  );
};
