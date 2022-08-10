import LanguageProvider from './LanguageProvider'
import ThemeProvider from './ThemeProvider'

const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}

export default AppProvider
