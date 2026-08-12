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
  const topTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // 1. Initial Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        topTextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          [titleLine1Ref.current, titleLine2Ref.current],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
          '-=0.5'
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

      // 3. Scroll Effect: Cans rise UPWARDS & ZOOM IN, while ZIGI ZAGI and HORECA split apart left and right!
      if (productScrollRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });

        scrollTl
          .to(
            productScrollRef.current,
            {
              y: isMobile ? -140 : -220,
              scale: isMobile ? 1.25 : 1.36,
              ease: 'none',
            },
            0
          )
          .to(
            titleLine1Ref.current,
            {
              x: isMobile ? '-14vw' : '-10vw',
              ease: 'none',
            },
            0
          )
          .to(
            titleLine2Ref.current,
            {
              x: isMobile ? '14vw' : '10vw',
              ease: 'none',
            },
            0
          )
          .to(
            badgeRef.current,
            {
              rotate: 360,
              ease: 'none',
            },
            0
          );
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

      {/* Top Right Floating Quality Badge (High up in open top-right cream space, rotates 360deg on Scroll) */}
      <div
        ref={badgeRef}
        className="hidden lg:flex absolute right-6 lg:right-12 xl:right-16 top-24 lg:top-28 z-30 w-36 h-36 xl:w-44 xl:h-44 items-center justify-center group cursor-pointer"
        onClick={handleWhatsAppClick}
      >
        <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
          <Image
            src="/assets/trust/badge-custom.png"
            alt="Zigi Quality Badge"
            fill
            sizes="176px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Top Text Line: Above Cans (Pure Clean Typography, No Box) */}
        <div ref={topTextRef} className="relative z-30 w-full max-w-3xl mx-auto text-center pt-2 sm:pt-4 pb-2">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] uppercase tracking-wider leading-tight select-none">
            {t.hero.title}
          </h1>
        </div>

        {/* Center Stage: Huge Brand Typography & Levitating Products */}
        <div className="relative flex-1 flex items-center justify-center min-h-[420px] sm:min-h-[480px] md:min-h-[600px] my-auto">
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

        </div>

        {/* Bottom Half of Text: Placed Right Above WhatsApp Button (Pure Clean Typography, No Box) */}
        <div className="relative z-30 w-full max-w-xl mx-auto text-center flex flex-col items-center justify-center mt-2 sm:mt-4 pb-2">
          <p className="font-body text-base sm:text-lg md:text-xl font-bold text-[#000000]/90 text-center leading-relaxed mb-4 max-w-lg">
            {t.hero.subtitle}
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-xs sm:text-xs uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] hover:bg-[#931B2E] transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-105 active:scale-95 font-body cursor-pointer"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-[#E9E7DC]" />
            <span>{t.hero.whatsappBtn}</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
