'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { CheckCircle2 } from 'lucide-react';

export const Cooperation: React.FC = () => {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Individual refs for 3D can emergence animation
  const cansContainerRef = useRef<HTMLDivElement>(null);
  const centerCanRef = useRef<HTMLDivElement>(null);
  const leftCanRef = useRef<HTMLDivElement>(null);
  const rightCanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text entrance animation
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      textTl
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        .fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        );

      // 2. Can Emergence Animation:
      // First center can pops up, then left & right cans emerge from behind center!
      const canTl = gsap.timeline({
        scrollTrigger: {
          trigger: cansContainerRef.current,
          start: 'top 75%',
        },
      });

      const isMobile = window.innerWidth < 640;
      const xOffset = isMobile ? '85px' : '160px';

      // Initial setup: stack all cans behind center
      gsap.set([leftCanRef.current, rightCanRef.current], {
        x: 0,
        scale: 0.75,
        opacity: 0,
        rotate: 0,
      });

      gsap.set(centerCanRef.current, {
        scale: 0.7,
        opacity: 0,
        y: 60,
      });

      // Step 1: Center can pops in
      canTl.to(centerCanRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'back.out(1.4)',
      })
      // Step 2: Left and right cans emerge outward from behind center
      .to(
        leftCanRef.current,
        {
          x: `-${xOffset}`,
          rotate: -9,
          scale: 0.92,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .to(
        rightCanRef.current,
        {
          x: xOffset,
          rotate: 9,
          scale: 0.92,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.9'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'cooperation_terms', language });
    window.open(createWhatsAppLink({ language, source: 'cooperation_terms' }), '_blank');
  };

  return (
    <section
      id="cooperation"
      ref={sectionRef}
      className="relative w-full min-h-[90svh] bg-[#E9E7DC] text-[#000000] py-16 sm:py-20 px-4 md:px-8 flex items-center justify-center overflow-hidden select-none border-t border-[#000000]/10"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50 z-0" />

      <div className="max-w-[1340px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center pr-0 lg:pr-2">
          {/* Cursive Subtitle */}
          <span className="font-serif italic text-2xl md:text-3xl text-[#000000]/80 mb-2 font-normal tracking-wide">
            {t.cooperation.subtitle}
          </span>

          {/* Headline */}
          <h2
            ref={titleRef}
            className="font-display text-[9vw] sm:text-[6vw] lg:text-[3.6rem] xl:text-[4.4rem] leading-[0.88] font-medium tracking-tight text-[#071952] uppercase mb-6 select-none whitespace-nowrap"
          >
            {language === 'ru' ? (
              <>
                УСЛОВИЯ
                <br />
                СОТРУДНИЧЕСТВА
              </>
            ) : (
              <>
                ЫНТЫМАҚТАСТЫҚ
                <br />
                ШАРТТАРЫ
              </>
            )}
          </h2>

          {/* Clean Structured List Block */}
          <div ref={textRef} className="space-y-4 max-w-xl">
            <ul className="space-y-3">
              {t.cooperation.list.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3.5 text-sm md:text-base font-semibold text-[#000000]/90 tracking-wide"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#B8223A] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Red Rectangle CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-9 py-4 bg-[#B8223A] hover:bg-[#931B2E] text-[#E9E7DC] font-display text-2xl tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                {t.cooperation.btn}
              </button>
            </div>
          </div>
        </div>

        {/* Right Cans Emergence Showcase (Responsive WebP format) */}
        <div
          ref={cansContainerRef}
          className="lg:col-span-6 relative w-full h-[360px] sm:h-[500px] lg:h-[680px] flex items-center justify-center lg:justify-end my-4 lg:my-0"
        >
          <div className="relative w-full h-full max-w-[560px] flex items-center justify-center">
            {/* Left Emerging Can (Zigi Дюшес) */}
            <div
              ref={leftCanRef}
              className="absolute w-36 sm:w-72 md:w-80 lg:w-[340px] h-[260px] sm:h-[480px] lg:h-[580px] z-10 pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            >
              <Image
                src="/assets/products/assortment/item-03-pear.webp"
                alt="Zigi Pear Can"
                fill
                sizes="(max-width: 640px) 150px, 340px"
                className="object-contain"
              />
            </div>

            {/* Right Emerging Can (Zigi Чай) */}
            <div
              ref={rightCanRef}
              className="absolute w-36 sm:w-72 md:w-80 lg:w-[340px] h-[260px] sm:h-[480px] lg:h-[580px] z-10 pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            >
              <Image
                src="/assets/products/assortment/item-02-tea-mango.webp"
                alt="Zigi Tea Can"
                fill
                sizes="(max-width: 640px) 150px, 340px"
                className="object-contain"
              />
            </div>

            {/* Center Front Main Can (Zigi Cola) */}
            <div
              ref={centerCanRef}
              className="absolute w-44 sm:w-80 md:w-[360px] lg:w-[420px] h-[320px] sm:h-[540px] lg:h-[660px] z-20 cursor-pointer filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.32)]"
              onClick={handleWhatsAppClick}
            >
              <Image
                src="/assets/products/assortment/item-01-cola.webp"
                alt="Zigi Cola Main Can"
                fill
                sizes="(max-width: 640px) 180px, 420px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
