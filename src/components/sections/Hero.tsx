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
      const isMobile = window.innerWidth < 768;

      // 1. Entrance Animation (Desktop & Mobile)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12 }
      )
        .fromTo(
          productRef.current,
          { y: 120, scale: 0.82, rotate: -6, opacity: 0 },
          {
            y: isMobile ? 30 : 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'back.out(1.4)',
            onComplete: () => {
              // Continuous sine levitating loop
              gsap.to(productRef.current, {
                y: isMobile ? 18 : -12,
                rotate: 1.5,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            },
          },
          '-=0.8'
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

      // 2. Scroll Animations
      if (!isMobile) {
        // Desktop Pinned Scene
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=110%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        scrollTl
          .to(
            productRef.current,
            { scale: 1.12, y: -40, rotate: 3, ease: 'none' },
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
      } else {
        // Mobile: Cans start lower and rise UPWARDS gracefully as user scrolls down!
        gsap.to(productRef.current, {
          y: -120,
          scale: 1.08,
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
    trackWhatsAppClick({ source: 'hero_whatsapp', language });
    window.open(createWhatsAppLink({ language, source: 'hero_whatsapp' }), '_blank');
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] bg-[#E9E7DC] text-[#000000] flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-4 md:px-8 overflow-hidden select-none"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1340px] mx-auto w-full flex-1 flex flex-col justify-between items-center">
        {/* Giant 2-Line Condensed Title (Enlarged for Mobile) */}
        <div className="w-full flex flex-col items-center justify-center my-auto relative text-center">
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

          {/* Central Hero Product Cans (Enlarged + Rises Upward on Scroll) */}
          <div
            ref={productRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-[480px] h-[350px] sm:h-[400px] md:h-[560px] z-20 cursor-pointer pointer-events-auto filter drop-shadow-[0_30px_60px_rgba(184,34,58,0.25)]"
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

          {/* Desktop Right Text Block */}
          <div
            ref={sideTextRef}
            className="hidden md:flex flex-col gap-3 absolute -right-2 lg:-right-4 xl:right-0 top-1/3 -translate-y-1/2 z-30 max-w-[260px] lg:max-w-[310px] text-left font-body bg-[#E9E7DC]/95 backdrop-blur-md p-5 rounded-2xl border-2 border-black/15 shadow-md"
          >
            <h2 className="font-body text-lg lg:text-xl font-black text-[#000000] leading-snug tracking-tight">
              {t.hero.title}
            </h2>
            <p className="font-body text-sm lg:text-base font-bold text-[#000000]/90 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Unified Prominent WhatsApp CTA Button & Mobile Text Container */}
        <div className="relative z-30 w-full max-w-sm sm:max-w-md mx-auto text-center flex flex-col items-center justify-center mt-2 sm:mt-4 pb-2">
          {/* Mobile Description Text Block - Extra Enlarged & Ultra-readable */}
          <div className="md:hidden flex flex-col items-center mb-3.5 px-4 py-4 rounded-2xl bg-[#E9E7DC]/98 backdrop-blur-md border-2 border-[#000000]/20 shadow-md text-center w-full">
            <h2 className="font-display text-xl sm:text-2xl font-black text-[#000000] text-center leading-snug tracking-wide uppercase">
              {t.hero.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-center font-bold text-[#000000]/95 leading-relaxed mt-2">
              {t.hero.subtitle}
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
