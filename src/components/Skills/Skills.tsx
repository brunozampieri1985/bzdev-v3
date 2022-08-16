import styles from './Skills.module.css'
import data from './Skills.data'
import { useLanguage } from '@contexts/LanguageProvider'
import SkillCard from '@components/SkillCard'
import Section from '@components/Section'
import { GiSkills } from 'react-icons/gi'
import { useState } from 'react'
import { useTheme } from '@contexts/ThemeProvider'

const Skills: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const { language } = useLanguage()
  const { thm } = useTheme()
  const { frontend, others } = data.skills

  const isActive = (tab: number) => (tab === currentTab ? styles.active : '')
  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab)
  }

  return (
    <Section
      id="Skills"
      title={data.title[language]}
      description={data.description[language]}
      icon={GiSkills}>
      <div className={styles.wrapper}>
        <div
          className={styles.tab}
          style={
            {
              '--hover': thm.hover,
            } as React.CSSProperties
          }>
          <div
            className={`${styles.tabItem} ${isActive(0)}`}
            onClick={() => handleChangeTab(0)}
            style={{
              backgroundColor: isActive(0) ? thm.primary : thm.contrast,
              border: `1px solid ${thm.primary}`,
            }}>
            Frontend
          </div>
          <div
            className={`${styles.tabItem} ${isActive(1)}`}
            onClick={() => handleChangeTab(1)}
            style={{
              backgroundColor: isActive(1) ? thm.primary : thm.contrast,
              border: `1px solid ${thm.primary}`,
            }}>
            {language === 'en' ? 'Others' : 'Outros'}
          </div>        
        </div>
        <div
          className={`${styles.content} ${isActive(0)}`}
          style={
            {
              '--bg': thm.contrast,
              boxShadow: thm.shadow,              

            } as React.CSSProperties
          }>
          {frontend.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
        <div
          className={`${styles.content} ${isActive(1)}`}
          style={
            {
              '--bg': thm.contrast,
              boxShadow: thm.shadow,
              

            } as React.CSSProperties
          }>
          {others.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>       
      </div>
    </Section>
  )
}

export default Skills
