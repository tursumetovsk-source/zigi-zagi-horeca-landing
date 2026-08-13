'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { Sparkles } from 'lucide-react';

export const Influencers: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

        {/* Tilted Polaroid Hover-Reveal Cards Grid */}
        <div
          role="list"
          className="group grid w-full max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 p-2"
        >
          {/* Card 1: Erkebulan Toktar (Tilted Left) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[400px] sm:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out -rotate-2 sm:-rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/erkebulan-toktar.webp"
              alt="Еркебулан Токтар"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
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
            className="relative h-[400px] sm:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out rotate-2 sm:rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/bydastan.webp"
              alt="ByDastan"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
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

          {/* Card 3: Central Feature Card («Бренд, который знают ваши гости»: блогеры с охватом 7,5 млн+) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[400px] sm:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-4 border-[#B8223A] bg-[#B8223A] text-[#E9E7DC] p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 ease-in-out -rotate-1 sm:-rotate-1 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:shadow-[0_30px_60px_rgba(184,34,58,0.5)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            {/* Top Micro Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                7.5 МЛН+ ОХВАТ
              </span>
              <Sparkles className="w-5 h-5 text-[#E9E7DC]" />
            </div>

            {/* Main Center Feature Text */}
            <div className="my-auto text-left py-2 space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase leading-snug tracking-wider text-[#E9E7DC]">
                {language === 'ru'
                  ? '«Бренд, который знают ваши гости»: блогеры с охватом 7,5 млн+'
                  : '«Қонақтарыңыз білетін бренд»: 7,5 млн+ қамтуы бар блогерлер'}
              </h3>
              <p className="font-body text-xs font-semibold text-[#E9E7DC]/90 leading-relaxed border-t border-[#E9E7DC]/20 pt-3">
                {language === 'ru'
                  ? 'Блогеры и амбассадоры по всему Казахстану создают высокий спрос на напитки ZIGI в ресторанах и кафе.'
                  : 'Қазақстандағы блогерлер мекемелерде ZIGI сусындарына жоғары сұраныс қалыптастырады.'}
              </p>
            </div>

            {/* Bottom Tagline */}
            <div className="pt-2 text-left">
              <span className="font-body text-[11px] font-black uppercase tracking-widest text-[#E9E7DC]/80 block">
                ZIGI ZAGI HORECA ✨
              </span>
            </div>
          </div>

          {/* Card 4: Oljaskhan (Tilted Left) */}
          <div
            role="listitem"
            tabIndex={0}
            onClick={handleWhatsAppClick}
            className="relative h-[400px] sm:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out -rotate-2 sm:-rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/oljaskhan.webp"
              alt="Oljaskhan"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
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
            className="relative h-[400px] sm:h-[440px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out rotate-2 sm:rotate-3 group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!rotate-0 hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!rotate-0 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
          >
            <Image
              src="/assets/trust/bloggers/bota-mia.webp"
              alt="Bota Mia"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
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
      </div>
    </section>
  );
};
