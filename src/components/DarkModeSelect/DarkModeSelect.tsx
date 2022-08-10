import styles from './DarkModeSelect.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useEffect, useRef } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const DarkModeSelect: React.FC = () => {
  const { theme, thm, themeList, changeTheme } = useTheme()
  const checkRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    if (checked) {
      changeTheme({ color: theme.color, mode: 'dark' })
    } else {
      changeTheme({ color: theme.color, mode: 'light' })
    }
  }

  useEffect(() => {
    if (checkRef.current) {
      checkRef.current.checked = theme.mode === 'dark'
    }
  }, [theme.mode])

  return (
    <div className={styles.wrapper}>
      <div><FaSun fontSize={18}/></div>
      <input
        type="checkbox"
        name="language"
        id="change-colorMode"
        onChange={(e) => handleChange(e)}
        style={{
          '--bg': thm.background,
          '--clr': thm.primary
        } as React.CSSProperties}
        ref={checkRef}
      />
      <div><FaMoon fontSize={18}/></div>
    </div>
  )
}

export default DarkModeSelect
