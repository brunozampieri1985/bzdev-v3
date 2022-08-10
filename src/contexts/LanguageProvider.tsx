import React, { createContext, useState, useEffect, useContext } from 'react'

export type LanguageType = 'en' | 'pt'

type LanguageContextType = {
  language: LanguageType
  changeLanguage: (language: LanguageType) => void
}

export const LanguageContext = createContext({} as LanguageContextType)

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageType>('pt') // I'm Brazilian and I'm proud of it!

  const changeLanguage = (language: LanguageType) => {
    localStorage.setItem('language', language)
    setLanguage(language)
  }

  useEffect(() => {
    const language = localStorage.getItem('language') as LanguageType
    if (language) {
      setLanguage(language)
      return
    } else {
      if (navigator.language.includes('pt')) {
        setLanguage('pt')
      } else {
        setLanguage('en')
        return
      }
    }
    
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageProvider
