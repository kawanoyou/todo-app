import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from './translations'
import type { Language, TranslationKey } from './translations'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

const STORAGE_KEY = 'language'

function getInitialLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'ja') return saved
  const browserLang = navigator.language.slice(0, 2)
  return browserLang === 'ja' ? 'ja' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
