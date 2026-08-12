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
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // All 5 cards (Stat Card + 4 Stars) with lightweight optimized WebP images
  const allCards: MediaCard[] = [
    {
      id: 'toktar',
      date: '04/06/2026',
      badgeRu: 'МЕДИА-АМБАССАДОР',
      badgeKz: 'МЕДИА-АМБАССАДОР',
      titleRu: 'Еркебулан Токтар & ZIGI',
      titleKz: 'Еркебұлан Тоқтар & ZIGI',
      descRu: 'Популярный актер, боец и медиа-амбассадор ZIGI-ZAGI в Казахстане.',
      descKz: 'Қазақстандағы ZIGI-ZAGI танымал актері, спортшысы әрі медиа-амбассадоры.',
      image: '/assets/trust/bloggers/erkebulan-toktar.webp',
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
      image: '/assets/trust/bloggers/bydastan.webp',
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
      image: '/assets/trust/bloggers/oljaskhan.webp',
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
      image: '/assets/trust/bloggers/bota-mia.webp',
    },
  ];

  // Active index for single-card carousel (Default: 0 -> Toktar / Ambassador)
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Smooth entrance animation on card switch
  useEffect(() => {
    if (cardContainerRef.current) {
      gsap.fromTo(
        cardContainerRef.current,
        { scale: 0.94, opacity: 0.7, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

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
    setCurrentIndex((prev) => (prev - 1 + allCards.length) % allCards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allCards.length);
  };

  const currentCard = allCards[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E9E7DC] text-[#000000] py-16 sm:py-20 px-4 md:px-8 overflow-hidden select-none border-t border-[#000000]/10"
    >
      {/* Hidden Image Preloader for instant slide switching without delay */}
      <div className="hidden" aria-hidden="true">
        {allCards.map((card) =>
          card.image ? (
            <Image
              key={card.id}
              src={card.image}
              alt="Preload"
              width={500}
              height={300}
              priority
            />
          ) : null
        )}
      </div>

      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      <div className="max-w-[1294px] mx-auto text-center relative z-10">
        {/* Top Subtitle Label */}
        <span className="font-body font-extrabold text-xs md:text-sm text-[#000000]/70 uppercase tracking-[0.25em] mb-2 block">
          {language === 'ru' ? 'Медиа и Блогеры' : 'Медиа және Блогерлер'}
        </span>

        {/* Main Condensed Dark Headline (Responsive Adapted) */}
        <h2
          ref={titleRef}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[6.8rem] leading-[0.85] font-bold tracking-wider text-[#071952] uppercase mb-8 sm:mb-10 select-none"
        >
          {language === 'ru' ? 'МЕДИА & ЗВЁЗДЫ' : (
            <span className="text-[7.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[5.8rem]">МЕДИА ЖӘНЕ ЖҰЛДЫЗДАР</span>
          )}
        </h2>

        {/* Single Focused Card Showcase */}
        <div className="max-w-md sm:max-w-lg mx-auto relative min-h-[520px] flex items-center justify-center">
          <div ref={cardContainerRef} className="w-full">
            {currentCard.isStatCard ? (
              // Crimson Stat Card "СПРОС УЖЕ СОЗДАН!"
              <div
                className="relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] shadow-2xl cursor-pointer min-h-[480px]"
                onClick={handleCityScroll}
              >
                {/* Top Date Badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-[#E9E7DC]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[11px] font-black text-[#000000] tracking-wider uppercase shadow">
                    <span className="block text-[9px] text-[#B8223A] font-bold">
                      {language === 'ru' ? currentCard.badgeRu : currentCard.badgeKz}
                    </span>
                    <span>{currentCard.date}</span>
                  </div>
                  <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-[#E9E7DC]">
                    {currentIndex + 1} / {allCards.length}
                  </span>
                </div>

                {/* Body Content with Giant 7,5 МЛН+ Stat */}
                <div className="flex-1 flex flex-col justify-center text-left my-auto space-y-4 py-4">
                  <h3 className="font-display text-4xl sm:text-5xl uppercase leading-tight tracking-wide text-[#E9E7DC] font-bold">
                    {language === 'ru' ? currentCard.titleRu : currentCard.titleKz}
                  </h3>

                  <div className="py-2">
                    <p className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E9E7DC]/80 mb-1">
                      {language === 'ru' ? 'Блогеры с общим охватом' : 'Жалпы қамтуы бар блогерлер'}
                    </p>
                    <div className="font-display text-6xl sm:text-7xl font-bold tracking-wider text-[#E9E7DC] leading-none my-2">
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
                    className="w-full py-4 px-6 font-display text-xl tracking-wider uppercase transition-all duration-300 shadow-md bg-[#E9E7DC] text-[#B8223A] hover:bg-white font-bold rounded-2xl"
                  >
                    {language === 'ru' ? 'ВЫБРАТЬ ВАШ ГОРОД' : 'ҚАЛАҢЫЗДЫ ТАҢДАУ'}
                  </button>
                </div>
              </div>
            ) : (
              // Individual Blogger Card
              <div
                className="relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] shadow-2xl cursor-pointer min-h-[500px]"
                onClick={handleWhatsAppClick}
              >
                {/* Top Image Container */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden mb-4 bg-[#000000]/20">
                  <Image
                    src={currentCard.image!}
                    alt={currentCard.titleRu}
                    fill
                    sizes="(max-width: 640px) 100vw, 500px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Date Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-[#E9E7DC]/95 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-black text-[#000000] tracking-wider uppercase shadow">
                    <span className="block text-[9px] text-[#B8223A] font-bold">
                      {language === 'ru' ? currentCard.badgeRu : currentCard.badgeKz}
                    </span>
                    <span>{currentCard.date}</span>
                  </div>

                  {/* Step counter */}
                  <div className="absolute top-3 right-3 bg-[#000000]/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                    {currentIndex + 1} / {allCards.length}
                  </div>
                </div>

                {/* Card Body Text */}
                <div className="flex-1 flex flex-col justify-between text-left space-y-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase leading-tight tracking-wide mb-2 text-[#E9E7DC] font-bold">
                      {language === 'ru' ? currentCard.titleRu : currentCard.titleKz}
                    </h3>
                    <p className="font-body text-xs sm:text-sm font-normal leading-relaxed text-[#E9E7DC]/90">
                      {language === 'ru' ? currentCard.descRu : currentCard.descKz}
                    </p>
                  </div>

                  {/* Solid Cream CTA Button */}
                  <div className="pt-3">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full py-3.5 px-6 font-display text-xl tracking-wider uppercase transition-all duration-300 shadow-md bg-[#E9E7DC] text-[#B8223A] hover:bg-white font-bold rounded-2xl"
                    >
                      {language === 'ru' ? 'ПОДРОБНЕЕ' : 'ТОЛЫҒЫРАҚ'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="p-3.5 rounded-full bg-[#B8223A] text-[#E9E7DC] hover:bg-[#931B2E] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
            aria-label="Previous card"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {allCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#B8223A]' : 'w-3 bg-[#000000]/25 hover:bg-[#B8223A]/50'
                }`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3.5 rounded-full bg-[#B8223A] text-[#E9E7DC] hover:bg-[#931B2E] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
            aria-label="Next card"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
