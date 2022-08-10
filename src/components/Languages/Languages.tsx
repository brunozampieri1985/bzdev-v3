import styles from './Languages.module.css'
import { useLanguage } from '@contexts/LanguageProvider'
import { useEffect, useRef } from 'react'
import { useTheme } from '@contexts/ThemeProvider'

const Languages: React.FC = () => {
  const { language, changeLanguage } = useLanguage()
  const { thm } = useTheme()
  const checkRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    if (checked) {
      changeLanguage('en')
    } else {
      changeLanguage('pt')
    }
  }

  useEffect(() => {
    if (checkRef.current) {
      checkRef.current.checked = language === 'en'
    }
  }, [language])

  return (
    <div className={styles.wrapper}>
      <div>PT</div>
      <input
        type="checkbox"
        name="language"
        id="change-language"
        onChange={(e) => handleChange(e)}
        style={{
          '--bg': thm.background,
          '--clr': thm.primary
        } as React.CSSProperties}
        ref={checkRef}
      />
      <div>EN</div>
    </div>
  )
}

export default Languages
