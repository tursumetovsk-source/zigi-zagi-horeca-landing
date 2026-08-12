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
  const productRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const sideTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          productRef.current,
          { y: 120, scale: 0.8, rotate: -6 },
          { y: 0, scale: 1, rotate: 0, duration: 1.3, ease: 'back.out(1.3)' },
          '-=0.9'
        )
        .fromTo(
          badgeRef.current,
          { scale: 0, rotate: -90 },
          { scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.5)' },
          '-=0.8'
        )
        .fromTo(
          sideTextRef.current,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );

      // 2. ScrollTrigger Pinned Scene
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(
          productRef.current,
          { scale: 1.12, y: -30, rotate: 3, ease: 'none' },
          0
        )
        .to(
          titleLine1Ref.current,
          { x: '-8vw', ease: 'none' },
          0
        )
        .to(
          titleLine2Ref.current,
          { x: '8vw', ease: 'none' },
          0
        )
        .to(
          badgeRef.current,
          { rotate: 180, ease: 'none' },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'hero_whatsapp', language });
    window.open(createWhatsAppLink({ language, source: 'hero_whatsapp' }), '_blank');
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] bg-[#E9E7DC] text-[#000000] flex flex-col justify-between pt-24 pb-8 px-4 md:px-8 overflow-hidden select-none"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1340px] mx-auto w-full flex-1 flex flex-col justify-between items-center">
        {/* Giant 2-Line Condensed Title */}
        <div className="w-full flex flex-col items-center justify-center my-auto relative text-center">
          <div
            ref={titleLine1Ref}
            className="font-display text-[21vw] md:text-[19vw] leading-[0.82] font-medium tracking-tight text-[#B8223A] uppercase select-none drop-shadow-sm"
          >
            ZIGI ZAGI
          </div>
          <div
            ref={titleLine2Ref}
            className="font-display text-[21vw] md:text-[19vw] leading-[0.82] font-medium tracking-tight text-[#B8223A] uppercase select-none drop-shadow-sm"
          >
            HORECA
          </div>

          {/* Central Hero Product Cans */}
          <div
            ref={productRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[480px] h-[360px] md:h-[560px] z-20 cursor-pointer pointer-events-auto filter drop-shadow-[0_30px_60px_rgba(184,34,58,0.25)]"
            onClick={handleWhatsAppClick}
          >
            <ProductImage
              src="/assets/products/zigi-hero-custom.webp"
              alt="Zigi Zagi Custom Product"
              fallbackSvgType="pear"
              accentColor="#B8223A"
              priority
            />
          </div>

          {/* Left Floating Badge */}
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

          {/* Right Column: Text block positioned neatly to right without overlap */}
          <div
            ref={sideTextRef}
            className="hidden md:flex flex-col gap-2.5 absolute -right-2 lg:-right-4 xl:right-0 top-1/3 -translate-y-1/2 z-30 max-w-[220px] lg:max-w-[260px] text-left font-body bg-[#E9E7DC]/90 backdrop-blur-md p-4 rounded-2xl border border-black/10 shadow-sm"
          >
            <h2 className="font-body text-sm lg:text-base font-bold text-[#000000] leading-snug tracking-tight">
              {t.hero.title}
            </h2>
            <p className="font-body text-xs lg:text-xs font-medium text-[#000000]/80 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Bottom Center: ONLY WhatsApp CTA Button */}
        <div className="relative z-30 max-w-xl mx-auto text-center flex flex-col items-center justify-center mt-2 md:mt-6 pb-2">
          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-4 rounded-full font-extrabold text-xs uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] hover:bg-[#931B2E] transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-105 active:scale-95 font-body"
          >
            <span>{t.hero.whatsappBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden flex-col gap-3 w-full max-w-sm mt-4 z-30 font-body">
          <h2 className="font-body text-sm font-semibold text-center text-[#000000]">
            {t.hero.title}
          </h2>
          <p className="font-body text-xs text-center font-normal text-[#000000]/80 px-2">
            {t.hero.subtitle}
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-4 rounded-full font-extrabold text-xs uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] flex items-center justify-center gap-2 shadow-md font-body"
          >
            <MessageCircle className="w-4 h-4 fill-[#E9E7DC]" />
            <span>{t.hero.whatsappBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
