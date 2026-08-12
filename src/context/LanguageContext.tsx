'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations, TranslationSchema } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Synchronously initialize language from localStorage on client before first render
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('zigi_lang') as Language;
        if (saved === 'ru' || saved === 'kz') {
          return saved;
        }
      } catch {}
    }
    return 'ru';
  });

  // Ensure synchronous update if localStorage changes in other tabs or initial hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem('zigi_lang') as Language;
      if (saved && (saved === 'ru' || saved === 'kz') && saved !== language) {
        setLanguageState(saved);
      }
    } catch {}
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('zigi_lang', lang);
    } catch {}
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
