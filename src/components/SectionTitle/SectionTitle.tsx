import styles from './SectionTitle.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { createElement } from 'react'

type SectionTitleProps = {
  title: string
  icon: React.ComponentType
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, icon }) => {
  const { theme, thm } = useTheme()

  return (
    <div className={styles.title}>
      <h1
        style={
          {
            '--clr': thm.primary,
            '--backClr': theme.mode === 'dark' ? '#1e1e1e' : '#fff',
            '--icon': thm.text
          } as React.CSSProperties
        }
        data-text={title}
        >
        {title}
        <span>
        {createElement(icon)}
        </span>
      </h1>
    </div>
  )
}

export default SectionTitle
