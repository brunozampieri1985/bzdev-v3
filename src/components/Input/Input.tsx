import React, { useState } from 'react'
import styles from './Input.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { MdError } from 'react-icons/md'
import { useTheme } from '@contexts/ThemeProvider'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean | null
  errorMsg?: string
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  valid,
  errorMsg,
  ...props
}) => {
  const { theme, thm } = useTheme()

  const backgroundColor = theme.mode === 'light' ? '#fff' : 'rgba(0,0,0,0.3)'
  const color = thm.text
  const boxShadow = thm.shadow

  const feedback = {
    styles: valid == null ? 'trasnparent' : valid ? 'green' : 'red',
    icon: valid == null ? null : valid ? <FaCheckCircle /> : <MdError />,
  }

  return (
    <div
      className={styles.inputBox}
      style={
        {
          '--focus': thm.primary,
        } as React.CSSProperties
      }>
      {type === 'textarea' ? (
        <textarea
          required
          placeholder={placeholder}
          style={{
            backgroundColor,
            color,
            boxShadow,
          }}
        />
      ) : (
        <>
          <input
            required
            placeholder={placeholder}
            type={type}
            style={{
              backgroundColor,
              color,
              boxShadow,
            }}
            {...props}
          />
          <span
            style={{
              color: feedback.styles,
            }}>
            {feedback.icon}
          </span>
        </>
      )}
    </div>
  )
}

export default Input
