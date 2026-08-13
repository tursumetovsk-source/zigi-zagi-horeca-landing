'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BloggerItem {
  id: string;
  badgeRu: string;
  badgeKz: string;
  date: string;
  titleRu: string;
  titleKz: string;
  descRu: string;
  descKz: string;
  image: string;
}

export const Influencers: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const bloggers: BloggerItem[] = [
    {
      id: 'toktar',
      badgeRu: 'МЕДИА-АМБАССАДОР',
      badgeKz: 'МЕДИА-АМБАССАДОР',
      date: '04/06/2026',
      titleRu: 'Еркебулан Токтар',
      titleKz: 'Еркебұлан Тоқтар',
      descRu: 'Популярный актер, боец и главный медиа-амбассадор ZIGI-ZAGI в Казахстане.',
      descKz: 'Қазақстандағы ZIGI-ZAGI танымал актері, спортшысы әрі медиа-амбассадоры.',
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

  return (
    <section
      ref={sectionRef}
      id="media"
      className="relative w-full bg-[#E9E7DC] text-[#000000] py-16 sm:py-24 px-4 md:px-8 overflow-hidden select-none border-t border-[#000000]/10"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      <div className="max-w-[1340px] mx-auto text-center relative z-10">
        {/* Top Subtitle Label */}
        <span className="font-body font-extrabold text-xs md:text-sm text-[#B8223A] uppercase tracking-[0.25em] mb-2 block">
          {language === 'ru' ? 'Медиа и Блогеры' : 'Медиа және Блогерлер'}
        </span>

        {/* Main Condensed Display Headline */}
        <h2
          ref={titleRef}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[6.5rem] leading-[0.85] font-bold tracking-wider text-[#000000] uppercase mb-4 select-none"
        >
          {language === 'ru' ? 'МЕДИА & ЗВЁЗДЫ' : 'МЕДИА ЖӘНЕ ЖҰЛДЫЗДАР'}
        </h2>

        {/* Total Reach Micro-Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#B8223A]/10 border border-[#B8223A]/20 mb-10 sm:mb-12">
          <Sparkles className="w-4 h-4 text-[#B8223A]" />
          <span className="font-body text-xs sm:text-sm font-extrabold text-[#B8223A] tracking-wider uppercase">
            {language === 'ru'
              ? '7.5 МЛН+ просмотров во всех городах присутствия'
              : 'Қатысу қалаларында 7.5 МЛН+ қаралым'}
          </span>
        </div>

        {/* Interactive Hover-Reveal Blogger Cards Grid (User Template Adapted) */}
        <div
          role="list"
          className="group grid w-full max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 p-2"
        >
          {bloggers.map((item) => (
            <div
              key={item.id}
              role="listitem"
              tabIndex={0}
              onClick={handleWhatsAppClick}
              className="relative h-[420px] sm:h-[460px] cursor-pointer overflow-hidden rounded-3xl border-2 border-[#B8223A]/20 bg-[#000000] shadow-xl transition-all duration-500 ease-in-out group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!border-[#B8223A] hover:shadow-[0_25px_50px_rgba(184,34,58,0.35)] focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none"
            >
              {/* Blogger Portrait Image (Preserved exact optimized file) */}
              <Image
                src={item.image}
                alt={item.titleRu}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Crimson & Dark Gradient Overlay for optimal text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#B8223A]/95 via-[#000000]/60 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Top Micro-Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#E9E7DC]/95 backdrop-blur-md text-[10px] font-black text-[#B8223A] uppercase tracking-wider shadow">
                  {language === 'ru' ? item.badgeRu : item.badgeKz}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#000000]/60 backdrop-blur-md text-[10px] font-bold text-[#E9E7DC]">
                  {item.date}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left z-10 flex flex-col justify-end text-[#E9E7DC]">
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E9E7DC] leading-tight mb-2">
                  {language === 'ru' ? item.titleRu : item.titleKz}
                </h3>
                <p className="font-body text-xs sm:text-sm font-medium text-[#E9E7DC]/90 leading-relaxed mb-4">
                  {language === 'ru' ? item.descRu : item.descKz}
                </p>

                {/* Interactive Action Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E9E7DC] text-[#B8223A] font-display text-sm font-bold uppercase tracking-wider group-hover:bg-white transition-colors w-fit shadow-md">
                  <span>{language === 'ru' ? 'ПОДРОБНЕЕ' : 'ТОЛЫҒЫРАҚ'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
