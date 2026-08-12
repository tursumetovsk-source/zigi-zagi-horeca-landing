'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { TrendingUp, Award, DollarSign, Sparkles, MessageCircle } from 'lucide-react';

export const Benefits: React.FC = () => {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const canParallaxRef = useRef<HTMLDivElement>(null);
  const canFloatRef = useRef<HTMLDivElement>(null);
  const bgCloudRef = useRef<HTMLDivElement>(null);
  const fgCloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Entrance
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: sectionRef.current }
      );

      // 2. Parallax Animations for Layer Depth (Background, Can, Foreground)
      gsap.to(bgCloudRef.current, {
        y: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(canParallaxRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(fgCloudRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      // 3. Can Initial Entrance + Continuous Sine Floating Loop
      if (canFloatRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });

        // Entrance: emerges upward from behind clouds
        tl.fromTo(
          canFloatRef.current,
          { y: 50, rotate: -6, scale: 0.9 },
          {
            y: 0,
            rotate: -2,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            onComplete: () => {
              // Continuous subtle levitating loop
              gsap.to(canFloatRef.current, {
                y: 14,
                x: 3,
                rotate: 1.8,
                duration: 4.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'benefits_whatsapp', language });
    window.open(createWhatsAppLink({ language, source: 'benefits_whatsapp' }), '_blank');
  };

  const icons = [
    <Award key="1" className="w-5 h-5 text-[#B8223A]" />,
    <TrendingUp key="2" className="w-5 h-5 text-[#B8223A]" />,
    <DollarSign key="3" className="w-5 h-5 text-[#B8223A]" />,
    <Sparkles key="4" className="w-5 h-5 text-[#B8223A]" />,
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative w-full min-h-[105svh] text-[#000000] py-16 px-4 md:px-8 overflow-hidden select-none"
    >
      {/* LAYER 1: Background + Far Clouds (z-index: 1) */}
      <div
        ref={bgCloudRef}
        className="absolute inset-0 z-1 pointer-events-none will-change-transform"
      >
        <Image
          src="/assets/backgrounds/benefits-bg.webp"
          alt="Far Clouds Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
      </div>

      {/* Top SVG Wave Transition from Assortment */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-[#E9E7DC]">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] md:h-[90px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,25 C1150,95 850,15 550,80 C250,135 100,25 0,55 Z" />
        </svg>
      </div>

      {/* LAYER 2: Levitating Can (z-index: 2) pulled up higher so top half is clearly visible */}
      <div className="absolute inset-0 z-2 pointer-events-none flex items-center justify-center lg:justify-start lg:pl-8">
        <div
          ref={canParallaxRef}
          className="can-parallax relative w-72 sm:w-88 md:w-[420px] h-[460px] sm:h-[540px] md:h-[620px] -mt-10 sm:-mt-16 lg:-mt-24 lg:ml-4 will-change-transform pointer-events-auto cursor-pointer"
          onClick={handleWhatsAppClick}
        >
          <div ref={canFloatRef} className="can-float w-full h-full relative will-change-transform">
            <Image
              src="/assets/products/assortment/item-pear.webp"
              alt="Zigi Pear Can Floating in Clouds"
              fill
              sizes="(max-width: 768px) 350px, 420px"
              className="object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.38)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* LAYER 3: Foreground Clouds that cover lower half of the can (z-index: 3) */}
      <div
        ref={fgCloudRef}
        className="absolute inset-0 z-3 pointer-events-none will-change-transform"
      >
        <Image
          src="/assets/backgrounds/benefits-fg.webp"
          alt="Foreground Clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* CONTENT LAYER: Section Header, 4 Benefit Cards, and WhatsApp CTA (z-index: 20) */}
      <div className="max-w-[1340px] mx-auto w-full relative z-20 pt-6 pb-10">
        {/* Main Section Header with Crimson #B8223A Headline & Clean Uppercase Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="font-body font-extrabold text-xs md:text-sm text-[#B8223A] uppercase tracking-[0.25em] mb-3 block">
            {t.benefits.topLabel}
          </span>
          <h2
            ref={titleRef}
            className="font-display text-[9.5vw] sm:text-[6.5vw] lg:text-[5.2rem] leading-[1.05] md:leading-[1.08] font-bold tracking-wider text-[#B8223A] uppercase select-none"
          >
            <span className="block mb-2">{t.benefits.titleLine1}</span>
            <span className="block">{t.benefits.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[#000000]/85 text-sm md:text-lg max-w-2xl mx-auto font-semibold">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Grid: Reserved Can space on left + 4 Beautiful Benefit Cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Reserved Spacer for Floating Can */}
          <div className="lg:col-span-5 min-h-[300px] sm:min-h-[380px] pointer-events-none" />

          {/* Right Column: 4 Beautiful Benefit Cards + WhatsApp CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.benefits.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#E9E7DC]/95 backdrop-blur-md border-3 border-[#B8223A] shadow-[5px_5px_0px_#B8223A] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  onClick={handleWhatsAppClick}
                >
                  <h3 className="font-display text-lg sm:text-xl text-[#B8223A] uppercase leading-tight tracking-wide font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm font-medium text-[#000000]/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Red Rectangle CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full py-4 px-8 bg-[#B8223A] hover:bg-[#931B2E] text-[#E9E7DC] font-display text-2xl tracking-wider uppercase border-3 border-[#000000] shadow-[5px_5px_0px_#000000] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer rounded-2xl font-bold"
              >
                <MessageCircle className="w-6 h-6 fill-[#E9E7DC]" />
                <span>{t.benefits.ctaBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom SVG Wave Transition to Media Stars (#E9E7DC cream) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-[#E9E7DC]">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] md:h-[90px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,60 C320,130 640,10 960,90 C1280,160 1400,40 1440,65 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
