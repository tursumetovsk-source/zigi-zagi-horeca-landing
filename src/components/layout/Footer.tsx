'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { MessageCircle, Phone, ShieldCheck, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const footerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bottleRef.current) {
        gsap.fromTo(
          bottleRef.current,
          { y: -60, rotate: 0, opacity: 0.7 },
          {
            y: 120,
            rotate: -10,
            opacity: 0.15,
            ease: 'none',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'footer_whatsapp', language });
    window.open(createWhatsAppLink({ language, source: 'footer_whatsapp' }), '_blank');
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#DDDBD1] text-[#000000] pt-20 pb-12 px-4 md:px-8 overflow-hidden select-none border-t border-[#000000]/10"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="font-display text-[22vw] tracking-tighter text-[#B8223A] opacity-5 uppercase leading-none">
          ZIGI ZAGI
        </div>
      </div>

      {/* Floating Can Dissolving Graphic from zigi ass in WebP format */}
      <div
        ref={bottleRef}
        className="absolute top-0 right-12 md:right-32 w-48 md:w-64 h-[300px] pointer-events-none z-0 filter blur-xs"
      >
        <Image
          src="/assets/products/assortment/item-cola.webp"
          alt="Декоративная банка напитка ZIGI-ZAGI"
          fill
          sizes="256px"
          className="object-contain opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-[1294px] mx-auto flex flex-col justify-between">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href="#hero"
              aria-label="ZIGI-ZAGI HoReCa — на главную"
              className="flex items-baseline gap-1"
            >
              <span className="font-display text-4xl text-[#000000] tracking-tight">
                ZIGI ZAGI
              </span>
              <span className="text-[9px] uppercase font-black tracking-widest text-[#B8223A]">
                HORECA
              </span>
            </a>
            <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-md font-medium">
              {t.footer.tagline}. Официальный производитель и оптовый поставщик напитков для сферы ресторанного бизнеса, отелей, розничных сетей и заведений Казахстана.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/zigi_zagi.kz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#E9E7DC] hover:bg-[#B8223A] text-[#000000] hover:text-[#E9E7DC] transition-colors border border-[#000000]/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="p-3 rounded-full bg-[#B8223A] text-[#E9E7DC] hover:bg-[#931B2E] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-[#E9E7DC]" />
              </button>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#B8223A]">
              Отдел оптовых продаж
            </h4>
            <a
              href={`tel:${t.footer.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 font-display text-2xl text-[#000000] hover:text-[#B8223A] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#B8223A]" />
              <span>{t.footer.phone}</span>
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] hover:bg-[#931B2E] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-[#E9E7DC]" />
              <span>{t.nav.whatsappBtn}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#000000]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#6B6B6B]">
          <div>{t.footer.rights}</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#B8223A] transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.footer.privacyPolicy}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
