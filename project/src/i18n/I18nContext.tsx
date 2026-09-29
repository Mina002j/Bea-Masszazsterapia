import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language, type Translation } from './translations';

interface I18nContextValue {
  lang: Language;
  t: Translation;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('hu');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'hu' ? 'en' : 'hu'));
  }, []);

  const value: I18nContextValue = {
    lang,
    t: translations[lang],
    setLang,
    toggleLang,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
