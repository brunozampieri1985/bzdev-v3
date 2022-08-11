import styles from './ProgressBar.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import React from 'react'

type ProgressBarProps = {
  value: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const { thm } = useTheme()
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: thm.background,
        border: `1px solid ${thm.primary}`,
      }}>
      <div
        className={styles.bar}
        style={
          {
            '--value': `${value}%`,
            backgroundColor: thm.primary,
          } as React.CSSProperties
        }></div>
    </div>
  )
}

export default ProgressBar
