"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Locale, type T } from "./translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: T;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("exit-locale") as Locale | null;
    if (stored && stored in translations) {
      setLocaleState(stored);
    }
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem("exit-locale", next);
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as typeof translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
