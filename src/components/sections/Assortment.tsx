'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { gsap } from '@/lib/gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type CategoryId = 'all' | 'lemonade' | 'mojito' | 'cola' | 'tea' | 'water';

interface ProductSlide {
  id: string;
  categoryId: CategoryId;
  nameRu: string;
  nameKz: string;
  subtitleRu: string;
  subtitleKz: string;
  bgHex: string;
  buttonTextHex: string;
  image: string;
}

const allProducts: ProductSlide[] = [
  // ZIGI COLA
  {
    id: 'cola',
    categoryId: 'cola',
    nameRu: 'ZIGI COLA',
    nameKz: 'ZIGI COLA',
    subtitleRu: 'Легендарный карамельно-пряный вкус',
    subtitleKz: 'Аңызға айналған карамель-дәмдеуіш дәмі',
    bgHex: '#B8223A',
    buttonTextHex: '#B8223A',
    image: '/assets/products/assortment/item-cola.webp',
  },

  // ЛИМОНАДЫ (LEMONADE)
  {
    id: 'pear',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ДЮШЕС',
    nameKz: 'ZIGI ДЮШЕС (АЛМҰРТ)',
    subtitleRu: 'Ароматная сочная десертная груша',
    subtitleKz: 'Хош иісті шырынды десерт алмұрты',
    bgHex: '#876d0e',
    buttonTextHex: '#876d0e',
    image: '/assets/products/assortment/item-pear.webp',
  },
  {
    id: 'tarkhun',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ТАРХУН',
    nameKz: 'ZIGI ТАРХУН',
    subtitleRu: 'Пряная свежесть эстрагона',
    subtitleKz: 'Эстрагонның дәмдеуіш сергектігі',
    bgHex: '#0d4e27',
    buttonTextHex: '#0d4e27',
    image: '/assets/products/assortment/item-tarkhun.webp',
  },
  {
    id: 'apple',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ЗЕЛЁНОЕ ЯБЛОКО',
    nameKz: 'ZIGI ЖАСЫЛ АЛМА',
    subtitleRu: 'Яркая кислинка спелого садового яблока',
    subtitleKz: 'Піскен бақша алмасының жарқын қышқылдығы',
    bgHex: '#254b0b',
    buttonTextHex: '#254b0b',
    image: '/assets/products/assortment/item-apple.webp',
  },
  {
    id: 'pomegranate',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ГРАНАТ',
    nameKz: 'ZIGI АНАР',
    subtitleRu: 'Благородный сок с изысканной кислинкой',
    subtitleKz: 'Нәзік қышқылдығы бар анар шырыны',
    bgHex: '#520726',
    buttonTextHex: '#520726',
    image: '/assets/products/assortment/item-pomegranate.webp',
  },

  // МОХИТО (MOJITO)
  {
    id: 'mojito-kiwi',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО КИВИ',
    nameKz: 'ZIGI МОХИТО КИВИ',
    subtitleRu: 'Ледяной лайм и спелый кубинский киви',
    subtitleKz: 'Мұзды лайм мен піскен кубалық киви',
    bgHex: '#2d6a4f',
    buttonTextHex: '#2d6a4f',
    image: '/assets/products/assortment/item-mojito-kiwi.webp',
  },
  {
    id: 'mojito-strawberry',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО КЛУБНИКА',
    nameKz: 'ZIGI МОХИТО ҚҰЛПЫНАЙ',
    subtitleRu: 'Клубника с прохладой мяты и лайма',
    subtitleKz: 'Жалбыз бен лайм салқындығы бар құлпынай',
    bgHex: '#6e0932',
    buttonTextHex: '#6e0932',
    image: '/assets/products/assortment/item-mojito-strawberry.webp',
  },

  // ЧАЙ (TEA)
  {
    id: 'tea-mango-chamomile',
    categoryId: 'tea',
    nameRu: 'ZIGI ЧАЙ МАНГО-РОМАШКА',
    nameKz: 'ZIGI ШАЙ МАНГО-ТҮЙМЕДАҚ',
    subtitleRu: 'Тропическое манго с нежной аптечной ромашкой',
    subtitleKz: 'Нәзік түймедақ пен тропиктік манго бар шай',
    bgHex: '#b05f15',
    buttonTextHex: '#b05f15',
    image: '/assets/products/assortment/item-tea-mango-chamomile.webp',
  },
  {
    id: 'tea-mango-pineapple',
    categoryId: 'tea',
    nameRu: 'ZIGI ЧАЙ МАНГО-АНАНАС',
    nameKz: 'ZIGI ШАЙ МАНГО-АНАНАС',
    subtitleRu: 'Сочный экзотический дуэт манго и ананаса',
    subtitleKz: 'Манго мен ананастың шырынды экзотикалық дуэті',
    bgHex: '#d47a19',
    buttonTextHex: '#d47a19',
    image: '/assets/products/assortment/item-tea-mango-pineapple.webp',
  },
  {
    id: 'tea-peach',
    categoryId: 'tea',
    nameRu: 'ZIGI ЧАЙ ПЕРСИК',
    nameKz: 'ZIGI ШАЙ ШАБДАЛЫ',
    subtitleRu: 'Бархатистый чай с ароматом южного персика',
    subtitleKz: 'Оңтүстік шабдалы хош иісті барқыт шай',
    bgHex: '#522404',
    buttonTextHex: '#522404',
    image: '/assets/products/assortment/item-tea-peach.webp',
  },
  {
    id: 'tea-strawberry',
    categoryId: 'tea',
    nameRu: 'ZIGI ЧАЙ КЛУБНИКА',
    nameKz: 'ZIGI ШАЙ ҚҰЛПЫНАЙ',
    subtitleRu: 'Ароматный холодный чай с спелой клубникой',
    subtitleKz: 'Піскен құлпынай хош иісті салқын шай',
    bgHex: '#8d092e',
    buttonTextHex: '#8d092e',
    image: '/assets/products/assortment/item-tea-strawberry.webp',
  },

  // ВОДА (WATER)
  {
    id: 'water',
    categoryId: 'water',
    nameRu: 'ZIGI СУ',
    nameKz: 'ZIGI СУ',
    subtitleRu: 'Природная горная питьевая артезианская вода',
    subtitleKz: 'Табиғи таулық артезиандық ауыз суы',
    bgHex: '#0a547a',
    buttonTextHex: '#0a547a',
    image: '/assets/products/assortment/item-water.webp',
  },
];

export const Assortment: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const canContainerRef = useRef<HTMLDivElement>(null);
  const textInfoRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);

  // Filter products strictly by selected category
  const filteredProducts =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.categoryId === activeCategory);

  const activeSlide = filteredProducts[currentIndex] || filteredProducts[0];
  const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
  const nextIndex = (currentIndex + 1) % filteredProducts.length;

  // Smooth GSAP Pop-in animation whenever active product changes
  useEffect(() => {
    if (canContainerRef.current) {
      gsap.fromTo(
        canContainerRef.current,
        { scale: 0.8, opacity: 0, y: 25, rotate: -4 },
        { scale: 1, opacity: 1, y: 0, rotate: 0, duration: 0.5, ease: 'back.out(1.5)' }
      );
    }
    if (textInfoRef.current) {
      gsap.fromTo(
        textInfoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
    if (mobileTextRef.current) {
      gsap.fromTo(
        mobileTextRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeSlide.id]);

  const handleCategoryChange = (catId: CategoryId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'assortment_view', language });
    window.open(createWhatsAppLink({ language, source: 'assortment_view' }), '_blank');
  };

  const categories = [
    { id: 'all', nameRu: 'Все напитки', nameKz: 'Барлық сусындар' },
    { id: 'lemonade', nameRu: 'Лимонады', nameKz: 'Лимонадтар' },
    { id: 'mojito', nameRu: 'Мохито', nameKz: 'Мохито' },
    { id: 'cola', nameRu: 'Zigi Cola', nameKz: 'Zigi Cola' },
    { id: 'tea', nameRu: 'Zigi Чай', nameKz: 'Zigi Шай' },
    { id: 'water', nameRu: 'Zigi Су', nameKz: 'Zigi Су' },
  ];

  return (
    <section
      id="assortment"
      className="relative w-full min-h-[100svh] transition-colors duration-700 ease-in-out text-[#E9E7DC] flex flex-col justify-between py-12 px-4 md:px-8 overflow-hidden select-none"
      style={{ backgroundColor: activeSlide.bgHex }}
    >
      {/* Top Wave Transition from Cooperation (#E9E7DC cream) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-[#E9E7DC]">
        <svg
          className="relative block w-full h-[50px] sm:h-[80px] md:h-[110px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,30 C1200,105 900,10 600,85 C300,140 120,20 0,65 Z" />
        </svg>
      </div>

      {/* Hidden Preloader for all 12 WebP product bottles */}
      <div className="hidden" aria-hidden="true">
        {allProducts.map((p) => (
          <Image key={p.id} src={p.image} alt="Preload" width={460} height={580} priority />
        ))}
      </div>

      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20 z-0" />

      {/* Concentric Circle Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full border border-white/20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[950px] md:h-[950px] lg:w-[1250px] lg:h-[1250px] rounded-full border border-white/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] md:w-[1250px] md:h-[1250px] lg:w-[1650px] lg:h-[1650px] rounded-full border border-white/10" />
      </div>

      {/* Top Header Container */}
      <div className="relative z-10 max-w-[1294px] mx-auto w-full flex flex-col items-start pt-16 md:pt-24 pb-4">
        {/* Title in Ultra-Readable Oswald font */}
        <h2 className="font-display text-[14vw] md:text-[8.5rem] leading-[0.82] text-[#E9E7DC] uppercase tracking-wider font-bold select-none drop-shadow-md mb-6">
          {language === 'ru' ? 'АССОРТИМЕНТ' : 'АССОРТИМЕНТ'}
        </h2>

        {/* Category Tabs & Packaging Formats Bar */}
        <div className="flex flex-wrap items-center gap-2.5 md:gap-3.5">
          {/* Category Filter Buttons */}
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as CategoryId)}
              className={`px-5 py-2.5 rounded-full font-body font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E9E7DC] text-[#000000] scale-105 shadow-lg'
                  : 'bg-black/30 text-[#E9E7DC] border-2 border-[#E9E7DC]/60 hover:bg-[#E9E7DC] hover:text-[#000000]'
              }`}
            >
              {language === 'ru' ? cat.nameRu : cat.nameKz}
            </button>
          ))}

          {/* Visual Separator Divider */}
          <div className="hidden sm:block w-px h-6 bg-[#E9E7DC]/40 mx-1" />

          {/* Individual Packaging Format Pills */}
          {[
            { nameRu: 'Банка', nameKz: 'Құты' },
            { nameRu: 'ПЭТ 0,5 л', nameKz: 'ПЭТ 0,5 л' },
            { nameRu: 'ПЭТ 1 л', nameKz: 'ПЭТ 1 л' },
            { nameRu: 'ПЭТ 1,5 л', nameKz: 'ПЭТ 1,5 л' },
            { nameRu: 'Бутылка 475 мл', nameKz: 'Бөтелке 475 мл' },
          ].map((fmt, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full bg-[#E9E7DC]/15 border border-[#E9E7DC]/50 text-[#E9E7DC] font-body text-xs font-extrabold shadow-sm whitespace-nowrap backdrop-blur-sm"
            >
              {language === 'ru' ? fmt.nameRu : fmt.nameKz}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1294px] mx-auto w-full flex-1 flex items-center justify-center my-auto py-6">
        {/* Left Edge Can Peek */}
        {filteredProducts.length > 1 && (
          <div
            onClick={handlePrev}
            className="hidden lg:block absolute -left-20 xl:-left-28 top-1/2 -translate-y-1/2 w-48 h-80 opacity-70 hover:opacity-100 transition-all cursor-pointer z-10 filter drop-shadow-lg"
          >
            <Image
              src={filteredProducts[prevIndex].image}
              alt="Previous flavor"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
        )}

        {/* Left Information Block */}
        <div ref={textInfoRef} className="hidden md:flex flex-col items-start absolute left-0 top-1/3 -translate-y-1/2 z-30 max-w-xs space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-body font-bold text-xs uppercase tracking-[0.2em] text-[#E9E7DC]/90">
              {language === 'ru' ? 'Оригинальный вкус' : 'Оригиналдық дәм'}
            </span>
          </div>

          <h3 className="font-display text-4xl lg:text-5xl text-[#E9E7DC] tracking-wider uppercase leading-tight drop-shadow-sm font-bold">
            {language === 'ru' ? activeSlide.nameRu : activeSlide.nameKz}
          </h3>

          <p className="font-body text-xs lg:text-sm font-semibold text-[#E9E7DC] leading-relaxed">
            {language === 'ru' ? activeSlide.subtitleRu : activeSlide.subtitleKz}
          </p>

          <div className="pt-2">
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-[#E9E7DC] hover:bg-white font-display text-xl tracking-wider uppercase shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-bold rounded-2xl"
              style={{ color: activeSlide.buttonTextHex }}
            >
              {language === 'ru' ? 'ПОЛУЧИТЬ ПРАЙС' : 'ПРАЙСТЫ АЛУ'}
            </button>
          </div>
        </div>

        {/* Center Spotlight & Featured 3D Can */}
        <div className="relative flex items-center justify-center z-20 my-4">
          {/* Cream Spotlight Cutout Circle */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#E9E7DC] shadow-2xl flex items-center justify-center transition-all duration-700 overflow-hidden relative">
            <div className="absolute inset-0 bg-grain opacity-20" />
          </div>

          {/* Central Product Can with Smooth GSAP Transition */}
          <div
            ref={canContainerRef}
            className="absolute w-64 sm:w-80 md:w-[420px] lg:w-[460px] h-[380px] sm:h-[480px] md:h-[580px] z-30 transition-transform duration-500 hover:scale-105 cursor-pointer filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.nameRu}
              fill
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Edge Can Peek */}
        {filteredProducts.length > 1 && (
          <div
            onClick={handleNext}
            className="hidden lg:block absolute -right-20 xl:-right-28 top-1/2 -translate-y-1/2 w-48 h-80 opacity-70 hover:opacity-100 transition-all cursor-pointer z-10 filter drop-shadow-lg"
          >
            <Image
              src={filteredProducts[nextIndex].image}
              alt="Next flavor"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Mobile Title & Action Block */}
      <div ref={mobileTextRef} className="flex md:hidden flex-col items-center text-center space-y-3 z-30 mb-6">
        <h3 className="font-display text-3xl sm:text-4xl text-[#E9E7DC] tracking-wider uppercase font-bold">
          {language === 'ru' ? activeSlide.nameRu : activeSlide.nameKz}
        </h3>
        <p className="font-body text-xs font-semibold text-[#E9E7DC] max-w-xs">
          {language === 'ru' ? activeSlide.subtitleRu : activeSlide.subtitleKz}
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="px-8 py-3.5 bg-[#E9E7DC] font-display text-lg tracking-wider uppercase shadow-md font-bold rounded-2xl"
          style={{ color: activeSlide.buttonTextHex }}
        >
          {language === 'ru' ? 'ПОЛУЧИТЬ ПРАЙС' : 'ПРАЙСТЫ АЛУ'}
        </button>
      </div>

      {/* Bottom Slider Arrow Controls */}
      {filteredProducts.length > 1 && (
        <div className="relative z-30 max-w-[1294px] mx-auto w-full flex items-center justify-center gap-8 pb-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border-2 border-[#E9E7DC] text-[#E9E7DC] hover:bg-[#E9E7DC] hover:text-[#000000] transition-all duration-300 shadow-md cursor-pointer group"
            aria-label="Previous product"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-2">
            {filteredProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#E9E7DC]' : 'w-2.5 bg-[#E9E7DC]/40 hover:bg-[#E9E7DC]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border-2 border-[#E9E7DC] text-[#E9E7DC] hover:bg-[#E9E7DC] hover:text-[#000000] transition-all duration-300 shadow-md cursor-pointer group"
            aria-label="Next product"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Bottom Wave Transition to Media Stars (#E9E7DC cream) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-[#E9E7DC]">
        <svg
          className="relative block w-full h-[50px] sm:h-[80px] md:h-[110px]"
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
