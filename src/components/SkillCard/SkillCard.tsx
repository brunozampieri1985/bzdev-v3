import styles from './SkillCard.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import type { SkillValue } from '@interfaces/Skill'
import { useInView } from 'react-intersection-observer'

type SkillCardProps = {
  skill: SkillValue
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { thm, theme } = useTheme()
  const { inView, ref } = useInView({ threshold: 0 })  
  const getColor = (skill: string) => {
    let color
    switch (skill) {
      case 'HTML':
        color = 'orange'
        break
      case 'CSS':
        color = '#0070f3'
        break
      case 'TypeScript':
        color = '#0070f3'
        break
      case 'JavaScript':
        color = theme.mode === 'dark' ? '#ffd700' : '#9B870C'
        break
      case 'React.JS':
        color = theme.mode === 'dark' ? '#61dafb' : '#0070f3'
        break
      case 'Redux':
        color = '#990099'
        break
      case 'Next.JS':
        color = theme.mode === 'dark' ? 'white' : 'black'
        break
      case 'Unit Test - Jest':
        color = '#ff0000'
        break
      case 'Node.JS':
        color = theme.mode === 'dark' ? 'limegreen' : '#009900'
        break
      case 'Rest API':
        color = theme.mode === 'dark' ? 'white' : 'black'       
        break 
      default:
        color = 'white'
    }
    return color
  }
  return (
    <div ref={ref}>
      {inView && (
        <div className={styles.card}>
          <div
            className={styles.value}
            style={
              {
                '--clr': getColor(skill.name),
                '--num': 314 - (314 * skill.value) / 100,
                '--dot': `rotate(calc(3.6deg * ${skill.value}))`,
                '--stroke': theme.mode === 'dark' ? 'black' : 'lightgray',
                '--skillClr': thm.text,
              } as React.CSSProperties
            }>
            <div className={styles.dot} />
            <svg>
              <circle cy="50" cx="50" r="50" />
              <circle cy="50" cx="50" r="50" />
            </svg>
            <div className={styles.number}>
              <h2>
                {skill.value}
                <span>%</span>
              </h2>
              <p>{skill.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillCard
