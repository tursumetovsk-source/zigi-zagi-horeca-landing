'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { X, MessageCircle, Globe, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const navLinks = [
    { href: '#assortment', label: t.nav.assortment },
    { href: '#cooperation', label: t.nav.cooperation },
    { href: '#benefits', label: t.nav.benefits },
    { href: '#partners', label: t.nav.partners },
    { href: '#cities', label: t.nav.cities },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'mobile_menu', language });
    window.open(createWhatsAppLink({ language, source: 'mobile_menu' }), '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#E9E7DC] flex flex-col justify-between pt-3.5 pb-6 px-5 sm:px-6 transition-all duration-300 text-[#000000] overflow-y-auto">
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      {/* Header Bar inside Mobile Menu - Aligned tightly to top */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#000000]/10 pb-3.5">
        <div className="flex flex-col">
          <span className="font-display text-2xl text-[#000000] tracking-wider leading-none font-bold">
            ZIGI ZAGI
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] font-black text-[#B8223A] leading-none mt-0.5">
            HORECA
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#000000] hover:text-[#B8223A] transition-colors rounded-full bg-[#000000]/5 border border-[#000000]/15"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links List */}
      <nav className="relative z-10 flex flex-col gap-3 my-auto py-6">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="flex items-center justify-between w-full text-left font-display text-3xl sm:text-4xl text-[#000000] hover:text-[#B8223A] transition-colors tracking-wider uppercase font-bold py-2 border-b border-[#000000]/5 group"
          >
            <span>{link.label}</span>
            <ChevronRight className="w-5 h-5 text-[#B8223A] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </nav>

      {/* Footer controls inside Mobile Menu */}
      <div className="relative z-10 flex flex-col gap-3 pt-2">
        {/* Language Switcher Bar (Circular RUS / KAZ Button) */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#000000]/5 border border-[#000000]/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#000000]/80">
            <Globe className="w-4 h-4 text-[#B8223A]" />
            <span>Язык / Тіл</span>
          </div>
          <button
            onClick={() => {
              setLanguage(language === 'ru' ? 'kz' : 'ru');
              onClose();
            }}
            className="w-11 h-11 rounded-full border-2 border-[#000000] flex items-center justify-center font-display font-bold text-xs text-[#000000] hover:bg-[#000000] hover:text-[#E9E7DC] transition-all duration-300 cursor-pointer shadow-sm active:scale-95 tracking-wider"
          >
            {language === 'ru' ? 'RUS' : 'KAZ'}
          </button>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-4 rounded-full font-display text-xl uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] hover:bg-[#931B2E] transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-95 font-bold"
        >
          <MessageCircle className="w-5 h-5 fill-[#E9E7DC]" />
          <span>{t.nav.whatsappBtn}</span>
        </button>
      </div>
    </div>
  );
};
