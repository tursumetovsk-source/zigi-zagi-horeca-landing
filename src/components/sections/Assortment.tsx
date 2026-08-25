'use client';

import React, { useState, useRef } from 'react';
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
    id: 'pear-1l',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ДЮШЕС',
    nameKz: 'ZIGI ДЮШЕС (АЛМҰРТ)',
    subtitleRu: 'Ароматная сочная десертная груша · ПЭТ 1 л',
    subtitleKz: 'Хош иісті шырынды десерт алмұрты · ПЭТ 1 л',
    bgHex: '#876d0e',
    buttonTextHex: '#876d0e',
    image: '/assets/products/pet-clean/lemonade-pear-1l.png',
  },
  {
    id: 'pear-1-5l',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ДЮШЕС',
    nameKz: 'ZIGI ДЮШЕС (АЛМҰРТ)',
    subtitleRu: 'Ароматная сочная десертная груша · ПЭТ 1,5 л',
    subtitleKz: 'Хош иісті шырынды десерт алмұрты · ПЭТ 1,5 л',
    bgHex: '#876d0e',
    buttonTextHex: '#876d0e',
    image: '/assets/products/pet-clean/lemonade-pear-1-5l.png',
  },
  {
    id: 'tarkhun-1l',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ТАРХУН',
    nameKz: 'ZIGI ТАРХУН',
    subtitleRu: 'Пряная свежесть эстрагона · ПЭТ 1 л',
    subtitleKz: 'Эстрагонның дәмдеуіш сергектігі · ПЭТ 1 л',
    bgHex: '#0d4e27',
    buttonTextHex: '#0d4e27',
    image: '/assets/products/pet-clean/lemonade-tarkhun-1l.png',
  },
  {
    id: 'tarkhun-1-5l',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ТАРХУН',
    nameKz: 'ZIGI ТАРХУН',
    subtitleRu: 'Пряная свежесть эстрагона · ПЭТ 1,5 л',
    subtitleKz: 'Эстрагонның дәмдеуіш сергектігі · ПЭТ 1,5 л',
    bgHex: '#0d4e27',
    buttonTextHex: '#0d4e27',
    image: '/assets/products/pet-clean/lemonade-tarkhun-1-5l.png',
  },
  {
    id: 'apple-1l',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ЗЕЛЁНОЕ ЯБЛОКО',
    nameKz: 'ZIGI ЖАСЫЛ АЛМА',
    subtitleRu: 'Яркая кислинка спелого садового яблока · ПЭТ 1 л',
    subtitleKz: 'Піскен бақша алмасының жарқын қышқылдығы · ПЭТ 1 л',
    bgHex: '#254b0b',
    buttonTextHex: '#254b0b',
    image: '/assets/products/pet-clean/lemonade-green-apple-1l.png',
  },
  {
    id: 'apple-1-5l',
    categoryId: 'lemonade',
    nameRu: 'ZIGI ЗЕЛЁНОЕ ЯБЛОКО',
    nameKz: 'ZIGI ЖАСЫЛ АЛМА',
    subtitleRu: 'Яркая кислинка спелого садового яблока · ПЭТ 1,5 л',
    subtitleKz: 'Піскен бақша алмасының жарқын қышқылдығы · ПЭТ 1,5 л',
    bgHex: '#254b0b',
    buttonTextHex: '#254b0b',
    image: '/assets/products/pet-clean/lemonade-green-apple-1-5l.png',
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
    id: 'mojito-kiwi-1l',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО КИВИ',
    nameKz: 'ZIGI МОХИТО КИВИ',
    subtitleRu: 'Ледяной лайм и спелый кубинский киви · ПЭТ 1 л',
    subtitleKz: 'Мұзды лайм мен піскен кубалық киви · ПЭТ 1 л',
    bgHex: '#2d6a4f',
    buttonTextHex: '#2d6a4f',
    image: '/assets/products/pet-clean/mojito-kiwi-1l.png',
  },
  {
    id: 'mojito-kiwi-1-5l',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО КИВИ',
    nameKz: 'ZIGI МОХИТО КИВИ',
    subtitleRu: 'Ледяной лайм и спелый кубинский киви · ПЭТ 1,5 л',
    subtitleKz: 'Мұзды лайм мен піскен кубалық киви · ПЭТ 1,5 л',
    bgHex: '#2d6a4f',
    buttonTextHex: '#2d6a4f',
    image: '/assets/products/pet-clean/mojito-kiwi-1-5l.png',
  },
  {
    id: 'mojito-strawberry-1l',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО КЛУБНИКА',
    nameKz: 'ZIGI МОХИТО ҚҰЛПЫНАЙ',
    subtitleRu: 'Клубника с прохладой мяты и лайма · ПЭТ 1 л',
    subtitleKz: 'Жалбыз бен лайм салқындығы бар құлпынай · ПЭТ 1 л',
    bgHex: '#6e0932',
    buttonTextHex: '#6e0932',
    image: '/assets/products/pet-clean/mojito-strawberry-1l.png',
  },
  {
    id: 'mojito-strawberry-1-5l',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО КЛУБНИКА',
    nameKz: 'ZIGI МОХИТО ҚҰЛПЫНАЙ',
    subtitleRu: 'Клубника с прохладой мяты и лайма · ПЭТ 1,5 л',
    subtitleKz: 'Жалбыз бен лайм салқындығы бар құлпынай · ПЭТ 1,5 л',
    bgHex: '#6e0932',
    buttonTextHex: '#6e0932',
    image: '/assets/products/pet-clean/mojito-strawberry-1-5l.png',
  },
  {
    id: 'mojito-lime-1l',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО ЛАЙМ',
    nameKz: 'ZIGI МОХИТО ЛАЙМ',
    subtitleRu: 'Лайм и мята для бодрящей свежести · ПЭТ 1 л',
    subtitleKz: 'Сергітетін сергектік үшін лайм мен жалбыз · ПЭТ 1 л',
    bgHex: '#2d6a4f',
    buttonTextHex: '#2d6a4f',
    image: '/assets/products/pet-clean/mojito-lime-1l.png',
  },
  {
    id: 'mojito-lime-1-5l',
    categoryId: 'mojito',
    nameRu: 'ZIGI МОХИТО ЛАЙМ',
    nameKz: 'ZIGI МОХИТО ЛАЙМ',
    subtitleRu: 'Лайм и мята для бодрящей свежести · ПЭТ 1,5 л',
    subtitleKz: 'Сергітетін сергектік үшін лайм мен жалбыз · ПЭТ 1,5 л',
    bgHex: '#2d6a4f',
    buttonTextHex: '#2d6a4f',
    image: '/assets/products/pet-clean/mojito-lime-1-5l.png',
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
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isAnimatingRef = useRef(false);

  // Filter products strictly by selected category
  const filteredProducts =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.categoryId === activeCategory);

  const activeSlide = filteredProducts[currentIndex] || filteredProducts[0];
  const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
  const nextIndex = (currentIndex + 1) % filteredProducts.length;

  // Bulletproof 0-Flicker Mobile Cross-Fade GSAP Timeline (All DOM elements pre-mounted)
  const animateToSlide = (newIndex: number) => {
    if (isAnimatingRef.current || newIndex === currentIndex) return;
    isAnimatingRef.current = true;

    const oldProduct = filteredProducts[currentIndex];
    const newProduct = filteredProducts[newIndex];
    const oldEl = productRefs.current[oldProduct.id];
    const newEl = productRefs.current[newProduct.id];

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        isAnimatingRef.current = false;
      },
    });

    if (oldEl && newEl) {
      tl.to(oldEl, {
        opacity: 0,
        scale: 0.85,
        y: -30,
        rotate: -4,
        duration: 0.2,
        ease: 'power2.in',
      })
        .to(
          [textInfoRef.current, mobileTextRef.current],
          { opacity: 0, y: -10, duration: 0.15, ease: 'power2.in' },
          '<0.05'
        )
        .fromTo(
          newEl,
          { opacity: 0, scale: 0.85, y: 30, rotate: 4 },
          { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 0.38, ease: 'back.out(1.4)' }
        )
        .fromTo(
          [textInfoRef.current, mobileTextRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '<0.1'
        );
    } else {
      setCurrentIndex(newIndex);
      isAnimatingRef.current = false;
    }
  };

  const handleCategoryChange = (catId: CategoryId) => {
    if (catId === activeCategory) return;
    setActiveCategory(catId);
    setCurrentIndex(0);
    if (canContainerRef.current) {
      gsap.fromTo(
        canContainerRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  };

  const handlePrev = () => {
    animateToSlide(prevIndex);
  };

  const handleNext = () => {
    animateToSlide(nextIndex);
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

  const formatPills = [
    { nameRu: 'Банка', nameKz: 'Құты' },
    { nameRu: 'ПЭТ 1 л', nameKz: 'ПЭТ 1 л' },
    { nameRu: 'ПЭТ 1,5 л', nameKz: 'ПЭТ 1,5 л' },
    { nameRu: 'Бутылка 475 мл', nameKz: 'Бөтелке 475 мл' },
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

      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20 z-0" />

      {/* Concentric Circle Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full border border-white/20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[950px] md:h-[950px] lg:w-[1250px] lg:h-[1250px] rounded-full border border-white/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] md:w-[1250px] md:h-[1250px] lg:w-[1650px] lg:h-[1650px] rounded-full border border-white/10" />
      </div>

      {/* Top Header Container */}
      <div className="relative z-10 max-w-[1294px] mx-auto w-full flex flex-col items-start pt-16 md:pt-24 pb-2">
        {/* Title in Ultra-Readable Oswald font */}
        <h2 className="font-display text-[14vw] md:text-[8.5rem] leading-[0.82] text-[#E9E7DC] uppercase tracking-wider font-bold select-none drop-shadow-md mb-4 sm:mb-6">
          {language === 'ru' ? 'АССОРТИМЕНТ' : 'АССОРТИМЕНТ'}
        </h2>

        {/* Category Buttons: Clean Wrap Without Scrolling (Restored as requested) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as CategoryId)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-body font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E9E7DC] text-[#000000] scale-105 shadow-lg font-black'
                  : 'bg-black/30 text-[#E9E7DC] border-2 border-[#E9E7DC]/60 hover:bg-[#E9E7DC] hover:text-[#000000]'
              }`}
            >
              {language === 'ru' ? cat.nameRu : cat.nameKz}
            </button>
          ))}
        </div>

        {/* Desktop Packaging Formats Bar */}
        <div className="hidden md:flex items-center gap-2.5">
          {formatPills.map((fmt, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-full bg-black/25 border border-[#E9E7DC]/40 text-[#E9E7DC] font-body text-xs font-extrabold shadow-sm backdrop-blur-sm"
            >
              {language === 'ru' ? fmt.nameRu : fmt.nameKz}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1294px] mx-auto w-full flex-1 flex items-center justify-center my-auto py-4 sm:py-6">
        {/* Left Edge Can Peek */}
        {filteredProducts.length > 1 && (
          <div
            onClick={handlePrev}
            className="hidden lg:block absolute -left-20 xl:-left-28 top-1/2 -translate-y-1/2 w-48 h-80 opacity-70 hover:opacity-100 transition-all cursor-pointer z-10 filter drop-shadow-lg"
          >
            <Image
              src={filteredProducts[prevIndex].image}
              alt="Предыдущий вкус напитка ZIGI-ZAGI"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
        )}

        {/* Left Information Block (Desktop) */}
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

        {/* MOBILE ONLY: Left Column Format Pills Flanking the Central Bottle */}
        <div className="flex md:hidden flex-col gap-2 absolute -left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
          {formatPills.slice(0, 2).map((fmt, idx) => (
            <div
              key={idx}
              className="px-2.5 py-1.5 rounded-xl bg-black/40 border-2 border-[#E9E7DC]/70 backdrop-blur-md text-[#E9E7DC] font-body text-xs font-black shadow-lg text-center whitespace-nowrap drop-shadow-md"
            >
              {language === 'ru' ? fmt.nameRu : fmt.nameKz}
            </div>
          ))}
        </div>

        {/* Center Spotlight & Featured 3D Can Container */}
        <div className="relative flex items-center justify-center z-20 my-4">
          {/* Cream Spotlight Cutout Circle */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#E9E7DC] shadow-2xl flex items-center justify-center transition-all duration-700 overflow-hidden relative">
            <div className="absolute inset-0 bg-grain opacity-20" />
          </div>

          {/* Central Product Can: All 12 Products Pre-Mounted in DOM for 100% Zero-Flicker Crossfade */}
          <div
            ref={canContainerRef}
            className="absolute w-60 sm:w-72 md:w-[420px] lg:w-[460px] h-[360px] sm:h-[440px] md:h-[580px] z-30 hover:scale-105 cursor-pointer filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            onClick={handleNext}
          >
            {filteredProducts.map((p, idx) => (
              <div
                key={p.id}
                ref={(el) => {
                  productRefs.current[p.id] = el;
                }}
                className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                  idx === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.nameRu}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE ONLY: Right Column Format Pills Flanking the Central Bottle */}
        <div className="flex md:hidden flex-col gap-2 absolute -right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
          {formatPills.slice(2).map((fmt, idx) => (
            <div
              key={idx}
              className="px-2.5 py-1.5 rounded-xl bg-black/40 border-2 border-[#E9E7DC]/70 backdrop-blur-md text-[#E9E7DC] font-body text-xs font-black shadow-lg text-center whitespace-nowrap drop-shadow-md"
            >
              {language === 'ru' ? fmt.nameRu : fmt.nameKz}
            </div>
          ))}
        </div>

        {/* Right Edge Can Peek */}
        {filteredProducts.length > 1 && (
          <div
            onClick={handleNext}
            className="hidden lg:block absolute -right-20 xl:-right-28 top-1/2 -translate-y-1/2 w-48 h-80 opacity-70 hover:opacity-100 transition-all cursor-pointer z-10 filter drop-shadow-lg"
          >
            <Image
              src={filteredProducts[nextIndex].image}
              alt="Следующий вкус напитка ZIGI-ZAGI"
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
            className="p-3.5 rounded-full border-2 border-[#E9E7DC] text-[#E9E7DC] hover:bg-[#E9E7DC] hover:text-[#000000] transition-all duration-300 shadow-md cursor-pointer group active:scale-95"
            aria-label="Previous product"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-2">
            {filteredProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => animateToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#E9E7DC]' : 'w-2.5 bg-[#E9E7DC]/40 hover:bg-[#E9E7DC]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3.5 rounded-full border-2 border-[#E9E7DC] text-[#E9E7DC] hover:bg-[#E9E7DC] hover:text-[#000000] transition-all duration-300 shadow-md cursor-pointer group active:scale-95"
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
