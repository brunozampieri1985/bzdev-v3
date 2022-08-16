import React from 'react'
import styles from './Socials.module.css'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '@contexts/ThemeProvider'


type SocialsProps = {
  size: number
}
const Socials: React.FC<SocialsProps> = ({ size }) => {

  const { thm } = useTheme()
  return (
    <div className={styles.socials} style={{
      fontSize: `${size}px`,
    }}>
      <div
        className={styles.social}
        style={
          {            
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <FaWhatsapp />
      </div>
      <div
        className={styles.social}
        style={
          {
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <FaLinkedin />
      </div>
      <div
        className={styles.social}
        style={
          {
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <FaGithub />
      </div>
      <div
        className={styles.social}
        style={
          {
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <FaEnvelope />
      </div>
    </div>
  )
}

export default Socials
