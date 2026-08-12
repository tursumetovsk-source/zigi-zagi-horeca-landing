'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ProductImage } from '@/components/ui/ProductImage';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const productScrollRef = useRef<HTMLDivElement>(null);
  const productFloatRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const sideTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // 1. Initial Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }
      )
        .fromTo(
          productScrollRef.current,
          { scale: 0.85, opacity: 0, y: 80 },
          { scale: 1, opacity: 1, y: 40, duration: 1, ease: 'back.out(1.4)' },
          '-=0.6'
        )
        .fromTo(
          badgeRef.current,
          { scale: 0, rotate: -90 },
          { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(1.4)' },
          '-=0.6'
        )
        .fromTo(
          sideTextRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        );

      // 2. Independent 60fps Continuous Levitating Floating Loop on Inner Container
      if (productFloatRef.current) {
        gsap.to(productFloatRef.current, {
          y: 12,
          rotate: 1.5,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // 3. Scroll Effect: Cans rise UPWARDS & ZOOM IN CLOSE to the screen!
      // Background text ZIGI ZAGI HORECA remains completely static (no sideways splitting).
      if (productScrollRef.current) {
        gsap.to(productScrollRef.current, {
          y: isMobile ? -140 : -220,
          scale: isMobile ? 1.25 : 1.36,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'hero_cta', language });
    window.open(createWhatsAppLink({ language, source: 'hero_cta' }), '_blank');
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] w-full bg-[#E9E7DC] text-[#000000] overflow-hidden flex flex-col justify-between pt-20 md:pt-24 pb-8 select-none"
    >
      {/* Paper Grain Texture Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Center Stage: Huge Brand Typography & Levitating Products */}
        <div className="relative flex-1 flex items-center justify-center min-h-[460px] sm:min-h-[520px] md:min-h-[640px] my-auto">
          {/* Background Display Headline: ZIGI ZAGI HORECA (Static, no sideways animation) */}
          <div className="flex flex-col items-center justify-center text-center pointer-events-none z-10">
            <div
              ref={titleLine1Ref}
              className="font-display text-[22vw] sm:text-[20vw] md:text-[19vw] leading-[0.82] font-bold tracking-wider text-[#B8223A] uppercase select-none drop-shadow-sm"
            >
              ZIGI ZAGI
            </div>
            <div
              ref={titleLine2Ref}
              className="font-display text-[22vw] sm:text-[20vw] md:text-[19vw] leading-[0.82] font-bold tracking-wider text-[#B8223A] uppercase select-none drop-shadow-sm"
            >
              HORECA
            </div>
          </div>

          {/* Central Hero Product Cans: Positioned Lower Initially + Rises Upward & Zooms In Close on Scroll */}
          <div
            ref={productScrollRef}
            className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-[480px] h-[350px] sm:h-[400px] md:h-[560px] z-20 cursor-pointer pointer-events-auto filter drop-shadow-[0_30px_60px_rgba(184,34,58,0.28)]"
            onClick={handleWhatsAppClick}
          >
            <div ref={productFloatRef} className="w-full h-full">
              <ProductImage
                src="/assets/products/zigi-hero-custom.webp"
                alt="Zigi Zagi Custom Product"
                fallbackSvgType="pear"
                accentColor="#B8223A"
                priority
              />
            </div>
          </div>

          {/* Left Floating Quality Badge */}
          <div
            ref={badgeRef}
            className="hidden lg:flex absolute left-0 xl:left-2 top-1/3 -translate-y-1/2 z-30 w-44 h-44 xl:w-52 xl:h-52 items-center justify-center group cursor-pointer"
            onClick={handleWhatsAppClick}
          >
            <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/assets/trust/badge-custom.png"
                alt="Zigi Quality Badge"
                fill
                sizes="208px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Redesigned Desktop Right Text Block (Ultra-Premium Glass Card) */}
          <div
            ref={sideTextRef}
            className="hidden md:flex flex-col gap-3.5 absolute -right-2 lg:-right-4 xl:right-0 top-1/3 -translate-y-1/2 z-30 max-w-[280px] lg:max-w-[330px] text-left font-body bg-[#E9E7DC]/92 backdrop-blur-xl p-5 sm:p-6 rounded-[2rem] border-l-4 border-l-[#B8223A] border border-[#000000]/10 shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(184,34,58,0.18)] transition-all duration-300 group"
          >
            {/* Top Crimson Micro-Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8223A] animate-pulse" />
              <span className="font-body text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-[#B8223A]">
                {language === 'ru' ? 'Для ресторанов & кафе' : 'Ресторандар & кафелерге'}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-display text-xl lg:text-2xl font-bold text-[#000000] leading-tight tracking-wide uppercase">
              {t.hero.title}
            </h2>

            {/* Structured Drink Feature Bullet Pills */}
            <div className="flex flex-wrap gap-1.5 py-0.5">
              {[
                { ru: '🥤 Лимонады', kz: '🥤 Лимонадтар' },
                { ru: '🍵 Чай', kz: '🍵 Шай' },
                { ru: '🍹 Мохито', kz: '🍹 Мохито' },
                { ru: '💧 Вода', kz: '💧 Су' },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-[#B8223A]/10 text-[#B8223A] font-body text-[11px] font-black tracking-wide"
                >
                  {language === 'ru' ? tag.ru : tag.kz}
                </span>
              ))}
            </div>

            {/* Subtitle Line */}
            <p className="font-body text-xs lg:text-sm font-bold text-[#000000]/80 leading-relaxed border-t border-[#000000]/10 pt-2.5">
              {language === 'ru'
                ? 'Напитки, которые гости заказывают снова и снова ✨'
                : 'Қонақтар қайта-қайта тапсырыс беретін сусындар ✨'}
            </p>
          </div>
        </div>

        {/* Unified Prominent WhatsApp CTA Button & Mobile Text Container */}
        <div className="relative z-30 w-full max-w-sm sm:max-w-md mx-auto text-center flex flex-col items-center justify-center mt-2 sm:mt-4 pb-2">
          {/* Redesigned Mobile Description Text Card */}
          <div className="md:hidden flex flex-col items-center mb-4 px-5 py-5 rounded-[2rem] bg-[#E9E7DC]/95 backdrop-blur-xl border-t-4 border-t-[#B8223A] border border-[#000000]/15 shadow-[0_15px_35px_rgba(0,0,0,0.15)] text-center w-full">
            {/* Top Crimson Micro Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#B8223A] animate-pulse" />
              <span className="font-body text-xs font-black uppercase tracking-[0.2em] text-[#B8223A]">
                {language === 'ru' ? 'Для ресторанов & кафе' : 'Ресторандар & кафелерге'}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#000000] text-center leading-snug tracking-wide uppercase">
              {t.hero.title}
            </h2>

            {/* Structured Drink Feature Bullet Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 my-3">
              {[
                { ru: '🥤 Лимонады', kz: '🥤 Лимонадтар' },
                { ru: '🍵 Чай', kz: '🍵 Шай' },
                { ru: '🍹 Мохито', kz: '🍹 Мохито' },
                { ru: '💧 Вода', kz: '💧 Су' },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#B8223A]/10 text-[#B8223A] font-body text-xs font-black tracking-wide shadow-xs"
                >
                  {language === 'ru' ? tag.ru : tag.kz}
                </span>
              ))}
            </div>

            {/* Subtitle */}
            <p className="font-body text-sm text-center font-bold text-[#000000]/80 leading-relaxed border-t border-[#000000]/10 pt-2.5 w-full">
              {language === 'ru'
                ? 'Напитки, которые гости заказывают снова и снова ✨'
                : 'Қонақтар қайта-қайта тапсырыс беретін сусындар ✨'}
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full font-extrabold text-xs sm:text-xs uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] hover:bg-[#931B2E] transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-105 active:scale-95 font-body"
          >
            <MessageCircle className="w-4 h-4 fill-[#E9E7DC]" />
            <span>{t.hero.whatsappBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
