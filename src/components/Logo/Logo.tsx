import styles from './Logo.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import React from 'react'

type LogoProps = {
  size: number
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  const { thm } = useTheme()  

  return (
    <div
      className={styles.logo}
      style={{
        color: thm.text,
        fontSize: `${size}px`,
      }}>
      BZDEV
      <span
        className={styles.dot}
        style={{
          background: thm.primary,
          width: `${size / 2}px`,
          height: `${size / 2}px`,
        }}
      />
    </div>
  )
}

export default Logo
