import { useI18n } from '../i18n/useI18n'

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex gap-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'ja'
            ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        JA
      </button>
    </div>
  )
}
