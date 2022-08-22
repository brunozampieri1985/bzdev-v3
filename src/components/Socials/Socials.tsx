import React from 'react'
import styles from './Socials.module.css'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '@contexts/ThemeProvider'
import Link from 'next/link'

type SocialsProps = {
  size: number
}
const Socials: React.FC<SocialsProps> = ({ size }) => {
  const { thm } = useTheme()
  return (
    <div
      className={styles.socials}
      style={{
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
        <Link href="https://wa.me/5511945582530" passHref target={'_blank'}>
          <FaWhatsapp />
        </Link>
      </div>
      <div
        className={styles.social}
        style={
          {
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <Link
          href="https://www.linkedin.com/in/bruno-zampieri/"
          passHref
          target={'_blank'}>
          <FaLinkedin />
        </Link>
      </div>
      <div
        className={styles.social}
        style={
          {
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <Link href="https://github.com/brunozampieri1985" passHref>
          <FaGithub />
        </Link>
      </div>
      <div
        className={styles.social}
        style={
          {
            '--clr': thm.text,
            '--hover': thm.primary,
          } as React.CSSProperties
        }>
        <Link href="#Contact">
          <FaEnvelope />
        </Link>
      </div>
    </div>
  )
}

export default Socials
