import React from 'react'
import styles from './Input.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { MdError } from 'react-icons/md'
import { useTheme } from '@contexts/ThemeProvider'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean
}
const validate = {
  text: {
    test: (value: string) => value.length > 3,
    feedback: 'Please enter at least 3 characters',
  },
  email: {
    test: (value: string) => {
      let regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(value)
    },
    feedback: 'Please enter a valid email address',
  },
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  valid,
  ...props
}) => {
  const { theme, thm } = useTheme()

  const backgroundColor = theme.mode === 'light' ? '#fff' : 'rgba(0,0,0,0.3)'
  const color = thm.text
  const boxShadow = thm.shadow
  return (
    <div className={styles.inputBox}>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} style={{
          backgroundColor,
          color,
          boxShadow,
        }}/>
      ) : (
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
      )}
    </div>
  )
}

export default Input
