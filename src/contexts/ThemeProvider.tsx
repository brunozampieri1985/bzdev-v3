import React, { createContext, useState, useEffect, useContext } from 'react'

type ColorTypes = string

type ColorModeTypes = 'light' | 'dark'

type ThemeState = {
    color: ColorTypes,
    mode: ColorModeTypes,
}

type ThemeContextType = {
  theme: ThemeState
  changeTheme: ({color, mode}: ThemeState) => void
}

export const ThemeContext = createContext({} as ThemeContextType)

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeState>({
    color: 'blue',
    mode: 'dark',
  })

  const changeTheme = ({color, mode}: ThemeState) => {
        setTheme({ color, mode })
    localStorage.setItem('theme', `${color}-${mode}`)
  }

  useEffect(() => {
    if (window !== undefined) {
      const localTheme = localStorage.getItem('theme')
      if (localTheme) {
        let splitTheme = (localTheme.split('-'))
        const color = splitTheme[0] as ColorTypes
        const mode = splitTheme[1] as ColorModeTypes
        setTheme({ color, mode })
      }
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const themeList = [
    'blue',
    'purple',
    'teal',
    'orange',
  ]
  const thm = {
    text: `var(--clr-txt-${theme.mode})`,
    background: `var(--clr-bg-${theme.mode})`,
    primary: `var(--clr-primary-${theme.color})`,
    hover: `var(--clr-primary-${theme.color}-hover)`,
    shadow: `var(--shadow-${theme.mode})`,
    contrast: `var(--clr-bg-contrast-${theme.mode})`,
  }
  return { theme, thm, themeList, changeTheme }
}

export default ThemeProvider
