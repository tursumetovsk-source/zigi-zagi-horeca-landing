'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface MediaCard {
  id: string;
  isStatCard?: boolean;
  date: string;
  badgeRu: string;
  badgeKz: string;
  titleRu: string;
  titleKz: string;
  descRu: string;
  descKz: string;
  image?: string;
}

export const Influencers: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // All 5 cards (Stat Card + 4 Stars)
  const allCards: MediaCard[] = [
    {
      id: 'toktar',
      date: '04/06/2026',
      badgeRu: 'МЕДИА-АМБАССАДОР',
      badgeKz: 'МЕДИА-АМБАССАДОР',
      titleRu: 'Еркебұлан Тоқтар & ZIGI',
      titleKz: 'Еркебұлан Тоқтар & ZIGI',
      descRu: 'Популярный актер, боец и медиа-амбассадор ZIGI-ZAGI в Казахстане.',
      descKz: 'Қазақстандағы ZIGI-ZAGI танымал актері, спортшысы әрі медиа-амбассадоры.',
      image: '/assets/trust/bloggers/erkebulan-toktar.png',
    },
    {
      id: 'stat-demand',
      isStatCard: true,
      date: '09/03/2026',
      badgeRu: 'ГЛАВНЫЙ ХИТ СЕЗОНА',
      badgeKz: 'МАУСЫМНЫҢ БАСТЫ ХИТІ',
      titleRu: 'СПРОС УЖЕ СОЗДАН!',
      titleKz: 'СҰРАНЫС ҚАЛЫПТАСҚАН!',
      descRu: 'Блогеры с общим охватом свыше 7.5 МЛН+ просмотров во всех городах присутствия.',
      descKz: 'Қатысу қалаларында 7.5 МЛН+ қаралымнан астам жалпы қамтуы бар блогерлер.',
    },
    {
      id: 'bydastan',
      date: '12/04/2026',
      badgeRu: 'ПОПУЛЯРНЫЙ БЛОГЕР',
      badgeKz: 'ТАНЫМАЛ БЛОГЕР',
      titleRu: 'ByDastan & ZIGI',
      titleKz: 'ByDastan & ZIGI',
      descRu: 'Яркие интеграции и развлекательный контент с напитками ZIGI-ZAGI.',
      descKz: 'ZIGI-ZAGI сусындары бар жарқын интеграциялар мен контент.',
      image: '/assets/trust/bloggers/bydastan.png',
    },
    {
      id: 'oljaskhan',
      date: '09/03/2026',
      badgeRu: 'ТОП КРЕАТОР',
      badgeKz: 'ТОП КРЕАТОР',
      titleRu: 'Oljaskhan & ZIGI',
      titleKz: 'Oljaskhan & ZIGI',
      descRu: 'Обзоры заведений и трендовый медиа-контент с освежающими вкусами.',
      descKz: 'Сергітетін дәмдері бар трендтегі медиа-контент және мекемелерге шолу.',
      image: '/assets/trust/bloggers/oljaskhan.png',
    },
    {
      id: 'botamia',
      date: '15/05/2026',
      badgeRu: 'ВЫБОР РЕСТОРАТОРОВ',
      badgeKz: 'РЕСТОРАТОРЛАРДЫҢ ТАҢДАУЫ',
      titleRu: 'Bota Mia & ZIGI',
      titleKz: 'Bota Mia & ZIGI',
      descRu: 'Стильная блогерша выбирает премиальные лимонады для лучших заведений.',
      descKz: 'Сәнді блогер ең үздік мекемелер үшін премиум лимонадтарды таңдайды.',
      image: '/assets/trust/bloggers/bota-mia.png',
    },
  ];

  // Active index for center card (Default: 1 -> 'СПРОС УЖЕ СОЗДАН' card in center)
  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: sectionRef.current }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'influencer_media', language });
    window.open(createWhatsAppLink({ language, source: 'influencer_media' }), '_blank');
  };

  const handleCityScroll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.getElementById('cities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + allCards.length) % allCards.length);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % allCards.length);
  };

  // Get 3 visible cards (Left, Center, Right)
  const leftCard = allCards[(centerIndex - 1 + allCards.length) % allCards.length];
  const mainCenterCard = allCards[centerIndex];
  const rightCard = allCards[(centerIndex + 1) % allCards.length];

  const visibleCards = [
    { card: leftCard, pos: 'left', tiltClass: 'lg:rotate-[-6deg] lg:translate-y-4 opacity-90 scale-95' },
    { card: mainCenterCard, pos: 'center', tiltClass: 'lg:rotate-0 lg:-translate-y-2 lg:scale-105 z-20 shadow-2xl' },
    { card: rightCard, pos: 'right', tiltClass: 'lg:rotate-[6deg] lg:translate-y-4 opacity-90 scale-95' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E9E7DC] text-[#000000] py-20 px-4 md:px-8 overflow-hidden select-none border-t border-[#000000]/10"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      <div className="max-w-[1294px] mx-auto text-center relative z-10">
        {/* Top Cursive Script Label */}
        <span className="font-serif italic text-2xl md:text-3xl text-[#000000]/80 mb-2 block font-normal tracking-wide">
          {language === 'ru' ? 'Медиа и Блогеры' : 'Медиа және Блогерлер'}
        </span>

        {/* Main Condensed Dark Headline */}
        <h2
          ref={titleRef}
          className="font-display text-[13vw] sm:text-[10vw] lg:text-[7.5rem] leading-[0.82] font-medium tracking-tight text-[#071952] uppercase mb-16 select-none"
        >
          {language === 'ru' ? 'МЕДИА & ЗВЁЗДЫ' : 'МЕДИА ЖӘНЕ ЖҰЛДЫЗДАР'}
        </h2>

        {/* 3 Tilted Crimson Cards Showcase matching royalbev.com 2nd screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center max-w-6xl mx-auto pt-4 min-h-[580px]">
          {visibleCards.map(({ card, pos, tiltClass }) => {
            if (card.isStatCard) {
              // Crimson Stat Card "СПРОС УЖЕ СОЗДАН!" matching screenshot 2 style
              return (
                <div
                  key={card.id}
                  className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] ${tiltClass} hover:scale-105 hover:rotate-0 hover:z-30 cursor-pointer shadow-xl`}
                  onClick={handleCityScroll}
                >
                  {/* Top Date Badge */}
                  <div className="flex justify-start mb-4">
                    <div className="bg-[#E9E7DC]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-black text-[#000000] tracking-wider uppercase shadow">
                      <span className="block text-[9px] text-[#B8223A] font-bold">
                        {language === 'ru' ? card.badgeRu : card.badgeKz}
                      </span>
                      <span>{card.date}</span>
                    </div>
                  </div>

                  {/* Body Content with Giant 7,5 МЛН+ Stat */}
                  <div className="flex-1 flex flex-col justify-center text-left my-auto space-y-4">
                    <h3 className="font-display text-4xl lg:text-5xl uppercase leading-none tracking-wide text-[#E9E7DC]">
                      {language === 'ru' ? card.titleRu : card.titleKz}
                    </h3>

                    <div className="py-2">
                      <p className="font-body text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#E9E7DC]/80 mb-1">
                        {language === 'ru' ? 'Блогеры с общим охватом' : 'Жалпы қамтуы бар блогерлер'}
                      </p>
                      <div className="font-display text-6xl lg:text-7xl font-bold tracking-tight text-[#E9E7DC] leading-none my-1">
                        7,5 МЛН+
                      </div>
                      <p className="font-body text-xs font-medium text-[#E9E7DC]/90">
                        {language === 'ru'
                          ? 'Охват аудитории в городах присутствия'
                          : 'Қатысу қалаларындағы аудиторияны қамту'}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleCityScroll}
                      className="w-full py-3.5 px-6 font-display text-xl tracking-wider uppercase transition-all duration-300 shadow-md bg-[#E9E7DC] text-[#B8223A] hover:brightness-110"
                    >
                      {language === 'ru' ? 'ВЫБРАТЬ ВАШ ГОРОД' : 'ҚАЛАҢЫЗДЫ ТАҢДАУ'}
                    </button>
                  </div>
                </div>
              );
            }

            // Blogger Cards
            return (
              <div
                key={card.id}
                className={`relative rounded-3xl p-5 md:p-6 flex flex-col justify-between transition-all duration-500 border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] ${tiltClass} hover:scale-105 hover:rotate-0 hover:z-30 cursor-pointer shadow-xl`}
                onClick={handleWhatsAppClick}
              >
                {/* Top Image Container */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden mb-5 bg-[#000000]/20">
                  <Image
                    src={card.image!}
                    alt={card.titleRu}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  {/* Date Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-[#E9E7DC]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-black text-[#000000] tracking-wider uppercase shadow">
                    <span className="block text-[9px] text-[#B8223A] font-bold">
                      {language === 'ru' ? card.badgeRu : card.badgeKz}
                    </span>
                    <span>{card.date}</span>
                  </div>
                </div>

                {/* Card Body Text */}
                <div className="flex-1 flex flex-col justify-between text-left space-y-3">
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl uppercase leading-tight tracking-wide mb-2 text-[#E9E7DC]">
                      {language === 'ru' ? card.titleRu : card.titleKz}
                    </h3>
                    <p className="font-body text-xs lg:text-sm font-normal leading-relaxed text-[#E9E7DC]/90">
                      {language === 'ru' ? card.descRu : card.descKz}
                    </p>
                  </div>

                  {/* Solid Cream CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full py-3.5 px-6 font-display text-xl tracking-wider uppercase transition-all duration-300 shadow-md bg-[#E9E7DC] text-[#B8223A] hover:brightness-110"
                    >
                      {language === 'ru' ? 'ПОДРОБНЕЕ' : 'ТОЛЫҒЫРАҚ'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows matching royalbev.com 2nd screenshot (← →) */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border-2 border-[#000000]/30 text-[#000000] hover:bg-[#B8223A] hover:border-[#B8223A] hover:text-[#E9E7DC] transition-all duration-300 shadow cursor-pointer group"
            aria-label="Previous card"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-2">
            {allCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCenterIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === centerIndex ? 'w-8 bg-[#B8223A]' : 'w-2.5 bg-[#000000]/20 hover:bg-[#B8223A]/50'
                }`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border-2 border-[#000000]/30 text-[#000000] hover:bg-[#B8223A] hover:border-[#B8223A] hover:text-[#E9E7DC] transition-all duration-300 shadow cursor-pointer group"
            aria-label="Next card"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
