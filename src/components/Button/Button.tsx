import styles from './Button.module.css'
import { useTheme } from '@contexts/ThemeProvider'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { thm } = useTheme()
  const { className, fullWidth, style, ...rest } = props //remove className and style from props

  return (
    <button
      className={styles.button}
      style={{
        width: fullWidth ? '100%' : 'auto',
        maxWidth: fullWidth ? '100%' : 'max-content',
        backgroundColor: thm.primary,
      }}
      {...rest}
    />
  )
}

export default Button
