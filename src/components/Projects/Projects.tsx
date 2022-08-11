import styles from './Projects.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import { useInView } from 'react-intersection-observer'
import data from './Projects.data'
import SectionTitle from '@components/SectionTitle'
import Slider from '@components/Slider'
import ProjectCard from '@components/ProjectCard'

const Projects: React.FC = () => {
  const { language } = useLanguage()
  const { theme, thm } = useTheme()
  const { inView, ref } = useInView({ threshold: 1 })

  return (
    <section id="Projects" className={styles.projects}>
      <div ref={ref}>
        {inView && <SectionTitle title={data.title[language]} />}
      </div>
      <p>{data.description[language]}</p>
      <Slider data={data.projects} element={ProjectCard} />
    </section>
  )
}

export default Projects
