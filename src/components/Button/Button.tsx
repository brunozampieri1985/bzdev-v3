import styles from './Button.module.css'
import { useTheme } from '@contexts/ThemeProvider'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { thm } = useTheme()
  const { className, fullWidth, variant, style, ...rest } = props //remove className and style from props


  const backgroundColor = variant === 'primary' || variant === undefined ? thm.primary : thm.background
  return (
    <button
      className={styles.button}
      style={{
        width: fullWidth ? '100%' : 'auto',
        maxWidth: fullWidth ? '100%' : 'max-content',
        '--bg': backgroundColor,
        '--hover': variant === 'primary' || variant === undefined ? thm.hover : thm.contrast,
      } as React.CSSProperties}
      {...rest}
    />
  )
}

export default Button
