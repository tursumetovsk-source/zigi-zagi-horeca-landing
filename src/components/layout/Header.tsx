'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#assortment', label: t.nav.assortment },
    { href: '#cooperation', label: t.nav.cooperation },
    { href: '#benefits', label: t.nav.benefits },
    { href: '#partners', label: t.nav.partners },
    { href: '#cities', label: t.nav.cities },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#E9E7DC]/95 backdrop-blur-md border-b border-[#000000]/10 py-2.5 md:py-3.5 shadow-sm'
            : 'bg-[#E9E7DC]/80 backdrop-blur-sm py-2.5 md:py-5 border-b border-[#000000]/5'
        }`}
      >
        <div className="max-w-[1294px] mx-auto px-4 md:px-8 flex items-center justify-between relative">
          {/* Left: Navigation Links */}
          <div className="flex items-center">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs uppercase font-extrabold tracking-widest text-[#000000]/80 hover:text-[#B8223A] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#E9E7DC] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center: ZIGI ZAGI Logo (Centered) */}
          <a
            href="#"
            className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col items-center group"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-[#000000] tracking-wider leading-none group-hover:text-[#B8223A] transition-colors font-bold">
                ZIGI ZAGI
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-black text-[#B8223A] leading-none">
              HORECA
            </span>
          </a>

          {/* Right: Circular RUS / KAZ Language Switcher Button (Exact User Screenshot Style) */}
          <div className="flex items-center">
            <button
              onClick={() => setLanguage(language === 'ru' ? 'kz' : 'ru')}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#000000] flex items-center justify-center font-display font-bold text-xs sm:text-sm text-[#000000] hover:bg-[#000000] hover:text-[#E9E7DC] transition-all duration-300 cursor-pointer shadow-sm active:scale-95 tracking-wider"
              title="Switch language"
            >
              {language === 'ru' ? 'RUS' : 'KAZ'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};
