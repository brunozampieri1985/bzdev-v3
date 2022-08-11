import styles from './SectionTitle.module.css'
import { useTheme } from '@contexts/ThemeProvider'

type SectionTitleProps = {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const { theme, thm } = useTheme()

  return (
    <h1
      style={
        {
          '--clr': thm.primary,
          '--backClr': theme.mode === 'dark' ? '#1e1e1e' : '#fff',
        } as React.CSSProperties
      }
      data-text={title}
      className={styles.title}>
      {title}
    </h1>
  )
}

export default SectionTitle