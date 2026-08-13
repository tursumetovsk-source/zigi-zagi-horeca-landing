'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CardItem {
  id: string;
  isFeatureCard?: boolean;
  badgeRu: string;
  badgeKz: string;
  date?: string;
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
  const [mobileIndex, setMobileIndex] = useState(0);

  // Touch Swipe Gesture State for Mobile Slider
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const cardsData: CardItem[] = [
    {
      id: 'toktar',
      badgeRu: 'МЕДИА-АМБАССАДОР',
      badgeKz: 'МЕДИА-АМБАССАДОР',
      date: '04/06/2026',
      titleRu: 'Еркебулан Токтар',
      titleKz: 'Еркебұлан Тоқтар',
      descRu: 'Популярный актер, боец и главный медиа-амбассадор ZIGI-ZAGI.',
      descKz: 'ZIGI-ZAGI танымал актері, спортшысы әрі медиа-амбассадоры.',
      image: '/assets/trust/bloggers/erkebulan-toktar.webp',
    },
    {
      id: 'bydastan',
      badgeRu: 'ПОПУЛЯРНЫЙ БЛОГЕР',
      badgeKz: 'ТАНЫМАЛ БЛОГЕР',
      date: '12/04/2026',
      titleRu: 'ByDastan & ZIGI',
      titleKz: 'ByDastan & ZIGI',
      descRu: 'Яркие видеоинтеграции и развлекательный трендовый контент.',
      descKz: 'ZIGI-ZAGI сусындары бар жарқын интеграциялар мен контент.',
      image: '/assets/trust/bloggers/bydastan.webp',
    },
    {
      id: 'feature-reach',
      isFeatureCard: true,
      badgeRu: '7.5 МЛН+ ОХВАТ',
      badgeKz: '7.5 МЛН+ ҚАМТУ',
      titleRu: '«Бренд, который знают ваши гости»: блогеры с охватом 7,5 млн+',
      titleKz: '«Қонақтарыңыз білетін бренд»: 7,5 млн+ қамтуы бар блогерлер',
      descRu: 'Блогеры и амбассадоры по всему Казахстану создают высокий спрос на напитки ZIGI в ресторанах и кафе.',
      descKz: 'Қазақстандағы блогерлер мекемелерде ZIGI сусындарына жоғары сұраныс қалыптастырады.',
    },
    {
      id: 'oljaskhan',
      badgeRu: 'ТОП КРЕАТОР',
      badgeKz: 'ТОП КРЕАТОР',
      date: '09/03/2026',
      titleRu: 'Oljaskhan & ZIGI',
      titleKz: 'Oljaskhan & ZIGI',
      descRu: 'Обзоры заведений и медиа-контент с освежающими напитками.',
      descKz: 'Сергітетін дәмдері бар трендтегі медиа-контент және мекемелерге шолу.',
      image: '/assets/trust/bloggers/oljaskhan.webp',
    },
    {
      id: 'botamia',
      badgeRu: 'ВЫБОР РЕСТОРАТОРОВ',
      badgeKz: 'РЕСТОРАТОРЛАРДЫҢ ТАҢДАУЫ',
      date: '15/05/2026',
      titleRu: 'Bota Mia & ZIGI',
      titleKz: 'Bota Mia & ZIGI',
      descRu: 'Стильная блогерша выбирает премиальные лимонады для кафе.',
      descKz: 'Сәнді блогер ең үздік мекемелер үшін премиум лимонадтарды таңдайды.',
      image: '/assets/trust/bloggers/bota-mia.webp',
    },
  ];

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

  const handlePrevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % cardsData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNextMobile();
    } else if (distance < -minSwipeDistance) {
      handlePrevMobile();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      ref={sectionRef}
      id="media"
      className="relative w-full bg-[#E9E7DC] text-[#000000] py-16 sm:py-24 px-4 md:px-8 overflow-hidden select-none border-t border-[#000000]/10"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        {/* Top Subtitle Label (Restored from Screenshot 2) */}
        <span className="font-body font-extrabold text-xs md:text-sm text-[#000000]/70 uppercase tracking-[0.25em] mb-2 block">
          {language === 'ru' ? 'МЕДИА И БЛОГЕРЫ' : 'МЕДИА ЖӘНЕ БЛОГЕРЛЕР'}
        </span>

        {/* Main Display Headline (Restored Deep Navy Blue #071952 from Screenshot 2) */}
        <h2
          ref={titleRef}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[6.8rem] leading-[0.85] font-bold tracking-wider text-[#071952] uppercase mb-10 sm:mb-14 select-none"
        >
          {language === 'ru' ? 'МЕДИА & ЗВЁЗДЫ' : 'МЕДИА ЖӘНЕ ЖҰЛДЫЗДАР'}
        </h2>

        {/* DESKTOP VIEW: 5 Tilted Polaroid Cards Grid (Larger Central Card) */}
        <div
          role="list"
          className="hidden lg:grid group w-full max-w-7xl mx-auto grid-cols-5 gap-5 xl:gap-6 items-center p-2"
        >
          {/* Card 1: Erkebulan Toktar (Tilted Left) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[410px] xl:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out -rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/erkebulan-toktar.webp"
              alt="Еркебулан Токтар"
              fill
              sizes="280px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8223A]/95 via-[#000000]/60 to-transparent opacity-90 transition-opacity duration-300" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 backdrop-blur-md text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                {language === 'ru' ? 'МЕДИА-АМБАССАДОР' : 'МЕДИА-АМБАССАДОР'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#000000]/60 backdrop-blur-md text-[10px] font-bold text-[#E9E7DC]">
                04/06/2026
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 flex flex-col justify-end text-[#E9E7DC]">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E9E7DC] leading-tight mb-1.5">
                {language === 'ru' ? 'Еркебулан Токтар' : 'Еркебұлан Тоқтар'}
              </h3>
              <p className="font-body text-xs font-medium text-[#E9E7DC]/90 leading-relaxed">
                {language === 'ru'
                  ? 'Популярный актер, боец и главный медиа-амбассадор ZIGI-ZAGI.'
                  : 'ZIGI-ZAGI танымал актері, спортшысы әрі медиа-амбассадоры.'}
              </p>
            </div>
          </div>

          {/* Card 2: ByDastan (Tilted Right) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[410px] xl:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/bydastan.webp"
              alt="ByDastan"
              fill
              sizes="280px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8223A]/95 via-[#000000]/60 to-transparent opacity-90 transition-opacity duration-300" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 backdrop-blur-md text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                {language === 'ru' ? 'ПОПУЛЯРНЫЙ БЛОГЕР' : 'ТАНЫМАЛ БЛОГЕР'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#000000]/60 backdrop-blur-md text-[10px] font-bold text-[#E9E7DC]">
                12/04/2026
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 flex flex-col justify-end text-[#E9E7DC]">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E9E7DC] leading-tight mb-1.5">
                ByDastan & ZIGI
              </h3>
              <p className="font-body text-xs font-medium text-[#E9E7DC]/90 leading-relaxed">
                {language === 'ru'
                  ? 'Яркие видеоинтеграции и развлекательный трендовый контент.'
                  : 'ZIGI-ZAGI сусындары бар жарқын интеграциялар мен контент.'}
              </p>
            </div>
          </div>

          {/* Card 3: LARGER CENTRAL FEATURE CARD (No Sparkles Icon) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[460px] xl:h-[490px] cursor-pointer overflow-hidden rounded-3xl border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-500 ease-in-out scale-105 z-20 -rotate-1 group-hover:scale-[0.98] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-110 hover:!opacity-100 hover:!blur-none hover:shadow-[0_35px_70px_rgba(184,34,58,0.55)] focus-visible:!rotate-0 focus-visible:!scale-110 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            {/* Top Micro Badge (No Sparkles Icon) */}
            <div className="flex items-center justify-start">
              <span className="px-3.5 py-1.5 rounded-full bg-[#E9E7DC]/95 text-[11px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                7.5 МЛН+ ОХВАТ
              </span>
            </div>

            {/* Main Center Feature Text */}
            <div className="my-auto text-left py-2 space-y-4">
              <h3 className="font-display text-2xl xl:text-3xl font-bold uppercase leading-snug tracking-wider text-[#E9E7DC]">
                {language === 'ru'
                  ? '«Бренд, который знают ваши гости»: блогеры с охватом 7,5 млн+'
                  : '«Қонақтарыңыз білетін бренд»: 7,5 млн+ қамтуы бар блогерлер'}
              </h3>
              <p className="font-body text-xs xl:text-sm font-semibold text-[#E9E7DC]/90 leading-relaxed border-t border-[#E9E7DC]/20 pt-3.5">
                {language === 'ru'
                  ? 'Блогеры и амбассадоры по всему Казахстану создают высокий спрос на напитки ZIGI в ресторанах и кафе.'
                  : 'Қазақстандағы блогерлер мекемелерде ZIGI сусындарына жоғары сұраныс қалыптастырады.'}
              </p>
            </div>

            {/* Bottom Tagline */}
            <div className="pt-2 text-left">
              <span className="font-body text-xs font-black uppercase tracking-widest text-[#E9E7DC]/80 block">
                ZIGI ZAGI HORECA ✨
              </span>
            </div>
          </div>

          {/* Card 4: Oljaskhan (Tilted Left) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[410px] xl:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out -rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/oljaskhan.webp"
              alt="Oljaskhan"
              fill
              sizes="280px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8223A]/95 via-[#000000]/60 to-transparent opacity-90 transition-opacity duration-300" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 backdrop-blur-md text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                {language === 'ru' ? 'ТОП КРЕАТОР' : 'ТОП КРЕАТОР'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#000000]/60 backdrop-blur-md text-[10px] font-bold text-[#E9E7DC]">
                09/03/2026
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 flex flex-col justify-end text-[#E9E7DC]">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E9E7DC] leading-tight mb-1.5">
                Oljaskhan & ZIGI
              </h3>
              <p className="font-body text-xs font-medium text-[#E9E7DC]/90 leading-relaxed">
                {language === 'ru'
                  ? 'Обзоры заведений и медиа-контент с освежающими напитками.'
                  : 'Сергітетін дәмдері бар трендтегі медиа-контент және мекемелерге шолу.'}
              </p>
            </div>
          </div>

          {/* Card 5: Bota Mia (Tilted Right) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[410px] xl:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/bota-mia.webp"
              alt="Bota Mia"
              fill
              sizes="280px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8223A]/95 via-[#000000]/60 to-transparent opacity-90 transition-opacity duration-300" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 backdrop-blur-md text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                {language === 'ru' ? 'ВЫБОР РЕСТОРАТОРОВ' : 'РЕСТОРАТОРЛАРДЫҢ ТАҢДАУЫ'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#000000]/60 backdrop-blur-md text-[10px] font-bold text-[#E9E7DC]">
                15/05/2026
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 flex flex-col justify-end text-[#E9E7DC]">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E9E7DC] leading-tight mb-1.5">
                Bota Mia & ZIGI
              </h3>
              <p className="font-body text-xs font-medium text-[#E9E7DC]/90 leading-relaxed">
                {language === 'ru'
                  ? 'Стильная блогерша выбирает премиальные лимонады для кафе.'
                  : 'Сәнді блогер ең үздік мекемелер үшін премиум лимонадтарды таңдайды.'}
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Interactive Touch-Swipe Slider Carousel with Arrow Controls */}
        <div className="flex lg:hidden flex-col items-center w-full max-w-sm sm:max-w-md mx-auto">
          {/* Touch-sensitive Card Viewport */}
          <div
            className="w-full relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cardsData[mobileIndex].isFeatureCard ? (
              // Mobile Central Feature Card
              <div
                onClick={handleWhatsAppClick}
                className="relative h-[440px] w-full cursor-pointer overflow-hidden rounded-3xl border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 active:scale-98"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                    7.5 МЛН+ ОХВАТ
                  </span>
                  <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-[#E9E7DC]">
                    {mobileIndex + 1} / {cardsData.length}
                  </span>
                </div>

                <div className="my-auto text-left py-2 space-y-3">
                  <h3 className="font-display text-2xl font-bold uppercase leading-snug tracking-wider text-[#E9E7DC]">
                    {language === 'ru'
                      ? cardsData[mobileIndex].titleRu
                      : cardsData[mobileIndex].titleKz}
                  </h3>
                  <p className="font-body text-xs font-semibold text-[#E9E7DC]/90 leading-relaxed border-t border-[#E9E7DC]/20 pt-3">
                    {language === 'ru'
                      ? cardsData[mobileIndex].descRu
                      : cardsData[mobileIndex].descKz}
                  </p>
                </div>

                <div className="pt-2 text-left">
                  <span className="font-body text-[11px] font-black uppercase tracking-widest text-[#E9E7DC]/80 block">
                    ZIGI ZAGI HORECA ✨
                  </span>
                </div>
              </div>
            ) : (
              // Mobile Blogger Card
              <div
                onClick={handleWhatsAppClick}
                className="relative h-[440px] w-full cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/30 bg-[#000000] shadow-xl transition-all duration-300 active:scale-98"
              >
                <Image
                  src={cardsData[mobileIndex].image!}
                  alt="Blogger"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#B8223A]/95 via-[#000000]/60 to-transparent opacity-90" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 backdrop-blur-md text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                    {language === 'ru'
                      ? cardsData[mobileIndex].badgeRu
                      : cardsData[mobileIndex].badgeKz}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#000000]/60 backdrop-blur-md text-[10px] font-bold text-[#E9E7DC]">
                    {mobileIndex + 1} / {cardsData.length}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 flex flex-col justify-end text-[#E9E7DC]">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E9E7DC] leading-tight mb-1.5">
                    {language === 'ru'
                      ? cardsData[mobileIndex].titleRu
                      : cardsData[mobileIndex].titleKz}
                  </h3>
                  <p className="font-body text-xs font-medium text-[#E9E7DC]/90 leading-relaxed">
                    {language === 'ru'
                      ? cardsData[mobileIndex].descRu
                      : cardsData[mobileIndex].descKz}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Arrow Controls & Indicator Dots */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handlePrevMobile}
              className="p-3.5 rounded-full bg-[#B8223A] text-[#E9E7DC] hover:bg-[#931B2E] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
              aria-label="Previous card"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {cardsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === mobileIndex ? 'w-8 bg-[#B8223A]' : 'w-2.5 bg-[#000000]/30 hover:bg-[#B8223A]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextMobile}
              className="p-3.5 rounded-full bg-[#B8223A] text-[#E9E7DC] hover:bg-[#931B2E] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
              aria-label="Next card"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
