import styles from './ThemeSelect.module.css'
import { useTheme } from '@contexts/ThemeProvider'

const ThemeSelect: React.FC = () => {
  const { theme, thm, themeList, changeTheme } = useTheme()

  return (
    <div className={styles.wrapper}>
      {themeList.map((t: string) => (
        <div
          key={t}
          onClick={() => changeTheme({ color: t, mode: theme.mode })}
          className={`${styles.theme} ${
            theme.color === t ? styles.active : ''
          }`}
          style={
            {
              backgroundColor: `var(--clr-primary-${t})`,
              boxShadow: `var(--shadow-${theme.mode})`,
              '--hover': thm.hover,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default ThemeSelect
