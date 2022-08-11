import { useInView } from 'react-intersection-observer'
import { GiSkills } from 'react-icons/gi'
import styles from './Skills.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import SectionTitle from '@components/SectionTitle'
import data from './Skills.data'

const Skills: React.FC = () => {
  const { language } = useLanguage()
  const { theme, thm } = useTheme()
  const { inView, ref } = useInView({ threshold: 1 })

  return (
    <section id="Skills" className={styles.skills}>
      <div ref={ref}>
        {inView && <SectionTitle title={data.title[language]} icon={GiSkills} />}
      </div>
      <p>{data.description[language]}</p>
      
    </section>
  )
}

export default Skills
