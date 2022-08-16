import styles from './SectionTitle.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { createElement } from 'react'
import useScreenSize from '@hooks/useScreenSize'

type SectionTitleProps = {
  title: string
  description: string
  icon: React.ComponentType
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  icon,
}) => {
  const { width, height } = useScreenSize()
  const { theme, thm } = useTheme()

  return (
    <>
    <div className={styles.title}>
        <h1
          style={
            {
              '--clr': thm.primary,
              '--backClr': theme.mode === 'dark' ? '#1e1e1e' : '#fff',
              '--icon': thm.text,
            } as React.CSSProperties
          }
          data-text={title}>
          {title}
          <span>{createElement(icon)}</span>
        </h1>
      </div>
      {width > 768 && <p>{description}</p>}
    </>
  )
}

export default SectionTitle
