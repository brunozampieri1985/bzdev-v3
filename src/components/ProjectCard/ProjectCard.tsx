import Image from 'next/image'
import styles from './ProjectCard.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import Project from '@interfaces/Project'
import React from 'react'

const ProjectCard: React.FC<Project> = ({ title, description, image, url }) => {
  const { thm } = useTheme()
  const { language } = useLanguage()

  return (
    <div
      className={styles.projectCard}>
      <div className={styles.inner}>
        <div className={styles.front} style={{
        '--shadow': thm.shadow,
      } as React.CSSProperties}>
          <div className={styles.image}>
            <Image
              src={image}
              alt={title}
              width={200}
              height={200 / 1.77}
              layout={'responsive'}
            />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.back} style={{
        '--shadow': thm.shadow,
        background: `linear-gradient(${thm.primary} 0%, ${thm.background} 50%)`,
      } as React.CSSProperties}>
        <div className={styles.description}>{description[language]}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard