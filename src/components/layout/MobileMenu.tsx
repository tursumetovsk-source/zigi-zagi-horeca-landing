'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { X, MessageCircle, Globe } from 'lucide-react';

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
    <div className="fixed inset-0 z-[100] bg-[#E9E7DC]/98 backdrop-blur-2xl flex flex-col justify-between p-6 transition-all duration-300 text-[#000000]">
      {/* Header Bar inside Mobile Menu */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-2xl text-[#000000] tracking-tight leading-none">
            ZIGI ZAGI
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] font-black text-[#B8223A] leading-none">
            HORECA
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 text-[#000000] hover:text-[#B8223A] transition-colors rounded-full bg-[#000000]/5 border border-[#000000]/10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-5 my-auto">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="text-left font-display text-3xl sm:text-4xl text-[#000000] hover:text-[#B8223A] transition-colors tracking-wide uppercase"
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Footer controls inside Mobile Menu */}
      <div className="flex flex-col gap-4">
        {/* Language Switcher */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#000000]/5 border border-[#000000]/10">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#000000]/80">
            <Globe className="w-4 h-4 text-[#B8223A]" />
            <span>Язык / Тіл</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('ru')}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all ${
                language === 'ru'
                  ? 'bg-[#B8223A] text-[#E9E7DC] shadow'
                  : 'text-[#000000]/70 hover:text-[#000000]'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLanguage('kz')}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all ${
                language === 'kz'
                  ? 'bg-[#B8223A] text-[#E9E7DC] shadow'
                  : 'text-[#000000]/70 hover:text-[#000000]'
              }`}
            >
              KZ
            </button>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-4 rounded-full font-display text-xl uppercase tracking-wider text-[#E9E7DC] bg-[#B8223A] hover:bg-[#931B2E] transition-all flex items-center justify-center gap-3 shadow-md active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-[#E9E7DC]" />
          <span>{t.nav.whatsappBtn}</span>
        </button>
      </div>
    </div>
  );
};
