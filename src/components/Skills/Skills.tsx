import styles from './Skills.module.css'
import data from './Skills.data'
import { useLanguage } from '@contexts/LanguageProvider'
import SkillCard from '@components/SkillCard'
import Section from '@components/Section'
import { GiSkills } from 'react-icons/gi'

const Skills: React.FC = () => {
  const { language } = useLanguage()  
  const { frontend, backend, testing } = data.skills
  
  return (
    <Section id="Skills" title={data.title[language]} description={data.description[language]} icon={GiSkills}>
      <div className={styles.frontend}> 
            {frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
      </div>
    </Section>
  )
}

export default Skills
