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
  // Keep the server and first client render identical, then restore the saved language.
  const [language, setLanguageState] = useState<Language>('ru');

  useEffect(() => {
    const applySavedLanguage = () => {
      try {
        const saved = localStorage.getItem('zigi_lang');
        if (saved === 'ru' || saved === 'kz') {
          setLanguageState(saved);
        }
      } catch {
        // Ignore storage restrictions (private mode or disabled storage).
      }
    };

    applySavedLanguage();
    window.addEventListener('storage', applySavedLanguage);

    return () => window.removeEventListener('storage', applySavedLanguage);
  }, []);

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
