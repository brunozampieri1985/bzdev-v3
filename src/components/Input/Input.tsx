import React from 'react'
import styles from './Input.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { MdError } from 'react-icons/md'
import { useTheme } from '@contexts/ThemeProvider'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type ValidationResult = {
  result: boolean
  feedback: string
}

interface Validation {
  [key: string]: {
    test: (value: string) => boolean
    feedback: string
  }
}

const validate: Validation = {
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
  required,
  onChange,
  ...props
}) => {
  const { theme, thm } = useTheme()
  const [validation, setValidation] = React.useState<ValidationResult | null>(
    null
  )
  const [value, setValue] = React.useState('')
  const isNull = validation ? false : true
  const isValid = validation && validation.result

  const handleFocus = () => {
    setValidation(null)
  }

  const handleBlur = () => {
    if (validate[type].test(value)) {
      setValidation({
        result: true,
        feedback: '',
      })
      return
    }
    setValidation({
      result: false,
      feedback: validate[type].feedback,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }

  const feedbackClass = isValid ? styles.success : styles.error

  const backgroundColor = theme.mode === 'light' ? '#fff' : 'rgba(0,0,0,0.3)'
  const color = thm.text
  const boxShadow = thm.shadow
  return (
    <div className={styles.inputBox}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
        value={value}
        type={'text'}
        required
        style={{
          backgroundColor,
          color,
          boxShadow
        }}
        {...props}
      />
      <span style={{
        '--clr': thm.text,
        '--clr-active': thm.primary
      } as React.CSSProperties}>{placeholder}</span>
      <p className={feedbackClass}>
       {isValid ? <FaCheckCircle /> : isNull ? '' : <MdError />}      
      </p>
    </div>
  )
}

export default Input
