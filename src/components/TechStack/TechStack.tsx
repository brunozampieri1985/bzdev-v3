import { useTheme } from '@contexts/ThemeProvider'
import { getStack } from 'src/utils'


interface TechIconProps {
  tech: string
  size: number
}

const TechStack: React.FC<TechIconProps> = ({ tech, size }) => {

  const IconToShow: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <>{icon}</>
  )
  const { theme } = useTheme()
  const { Icon } = getStack(
    tech,
    theme.mode,
    size
  )

  return <IconToShow icon={Icon} />
}

export default TechStack
