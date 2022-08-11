import Image from 'next/image'
import styles from './ProjectCard.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import Project from '@interfaces/Project'
import React from 'react'
import TechStack from '@components/TechStack'
import Link from '@components/Link'

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  url,
  tech,
}) => {
  const { thm } = useTheme()
  const { language } = useLanguage()

  const linkText = () => {
    if (url.slice(0, 1) != '#') {
      if (language === 'en') {
        return 'Visit'
      } else {
        return 'Visitar'
      }
    } else {
      if (language === 'en') {
        return 'Hire me'
      } else {
        return 'Contato'
      }
    }
  }

  const linkIsExternal = () => {
    if (url.slice(0, 1) != '#') {
      return true
    } else {
      return false
    }
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.inner}>
        <div
          className={styles.front}
          style={
            {
              '--shadow': thm.shadow,
            } as React.CSSProperties
          }>
          <div className={styles.image}>
            <Image
              src={image}
              alt={title}
              width={200}
              height={200 / 2}
              layout={'responsive'}
            />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div
          className={styles.back}
          style={
            {
              '--shadow-clr': thm.primary,
              color: thm.text,
              background: `linear-gradient(${thm.primary} 0%, ${thm.background} 50%)`,
            } as React.CSSProperties
          }>
          <div className={styles.description}>{description[language]}</div>
          <div className={styles.techStack}>
            {tech.map((t, index) => (
              <TechStack tech={t} size={20} key={index} />
            ))}
          </div>
          <div className={styles.actions}>
            <Link href={url} external={linkIsExternal()}>
              {linkText()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
