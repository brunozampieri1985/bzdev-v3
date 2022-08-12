import { useLanguage } from '@contexts/LanguageProvider'
import data from './Projects.data'
import { FaTools } from 'react-icons/fa'
import Slider from '@components/Slider'
import ProjectCard from '@components/ProjectCard'
import Section from '@components/Section'

const Projects: React.FC = () => {
  const { language } = useLanguage()
  return (
    <Section
      id="Projects"
      title={data.title[language]}
      description={data.description[language]}
      icon={FaTools}>
      <Slider data={data.projects} element={ProjectCard} />
    </Section>
  )
}

export default Projects
