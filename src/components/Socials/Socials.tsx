import React from 'react'
import styles from './Socials.module.css'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '@contexts/ThemeProvider'

const Socials: React.FC = () => {
    const { thm } = useTheme()
  return (
    <div className={styles.socials}>
      <div className={styles.social} style={{
        '--hover': thm.primary
      } as React.CSSProperties}>
        <FaWhatsapp />
      </div>
      <div className={styles.social} style={{
        '--hover': thm.primary
      } as React.CSSProperties}>
        <FaLinkedin />
      </div>
      <div className={styles.social} style={{
        '--hover': thm.primary
      } as React.CSSProperties}>
        <FaGithub />
      </div>
      <div className={styles.social} style={{
        '--hover': thm.primary
      } as React.CSSProperties}>
        <FaEnvelope />
      </div>
    </div>
  )
}

export default Socials
