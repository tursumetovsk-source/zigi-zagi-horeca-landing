'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { gsap } from '@/lib/gsap';

export const Partners: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Entrance
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: sectionRef.current }
      );

      // Infinite Marquee Carousel Loop via GSAP for silky smooth 60fps rotation
      if (tickerRef.current) {
        gsap.to(tickerRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 22,
          ease: 'none',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const partnerLogos = [
    { id: 1, name: 'Magnum Cash & Carry', logo: '/assets/trust/partners/partner-logo-1.png' },
    { id: 2, name: 'Small & Skif', logo: '/assets/trust/partners/partner-logo-2.png' },
    { id: 3, name: 'Dine & Wine HoReCa', logo: '/assets/trust/partners/partner-logo-3.png' },
    { id: 4, name: 'Air Astana Lounge', logo: '/assets/trust/partners/partner-logo-4.png' },
    { id: 5, name: 'Ritz-Carlton Almaty', logo: '/assets/trust/partners/partner-logo-5.png' },
  ];

  // Repeat logos 4 times for seamless infinite loop
  const repeatedLogos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative w-full bg-[#B8233A] text-[#E9E7DC] py-20 sm:py-24 px-4 md:px-8 overflow-hidden select-none"
    >
      {/* Top Cream Organic SVG Wave transitioning seamlessly from Influencers section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-[#E9E7DC]">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] md:h-[95px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,35 C1150,105 850,15 550,85 C250,135 100,30 0,60 Z" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto text-center relative z-10 pt-6">
        {/* Top Subtitle Label */}
        <span className="font-body font-extrabold text-xs md:text-sm text-[#E9E7DC]/90 uppercase tracking-[0.25em] mb-2 block">
          {language === 'ru' ? 'Нам доверяют заведения и сети' : 'Бізге мекемелер мен желілер сенеді'}
        </span>

        {/* Pure Cream Responsive Display Headline "НАМ ДОВЕРЯЮТ" */}
        <h2
          ref={titleRef}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[7.5rem] leading-[0.85] font-bold tracking-wider text-[#E9E7DC] uppercase mb-12 sm:mb-16 select-none"
        >
          {language === 'ru' ? 'НАМ ДОВЕРЯЮТ' : 'БІЗДІҢ СЕРІКТЕСТЕР'}
        </h2>

        {/* Infinite Rotating Marquee Ticker Carousel */}
        <div className="w-full overflow-hidden py-4 pb-8">
          <div
            ref={tickerRef}
            className="flex items-center gap-12 sm:gap-20 w-max whitespace-nowrap will-change-transform"
          >
            {repeatedLogos.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="group flex-shrink-0 w-48 sm:w-60 h-24 sm:h-32 flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="240px"
                    className="object-contain filter brightness-0 invert opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cream Organic SVG Wave transitioning seamlessly into Cities section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-[#E9E7DC]">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] md:h-[95px]"
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
