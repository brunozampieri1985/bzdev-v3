import styles from './Projects.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import data from './Projects.data'

const Projects: React.FC = () => {
  const { language } = useLanguage()
  const { theme, thm } = useTheme()
  return (
    <section id="Projects" className={styles.projects}>  
        <h1
          style={
            {
              '--clr': thm.primary,
              '--backClr': theme.mode === 'dark' ? '#1e1e1e' : '#fff',
            } as React.CSSProperties
          }
          data-text={data.title[language]}
          className={styles.title}>
          {data.title[language]}
        </h1>
    </section>
  )
}

export default Projects
