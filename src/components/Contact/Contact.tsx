import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import data from './Contact.data'
import { BsChatRightDotsFill } from 'react-icons/bs'
import Section from '@components/Section'

const Contact: React.FC = () => {
  const { language } = useLanguage()
  const { theme, thm } = useTheme()

  return (
    <Section
      id="Contact"
      description={data.description[language]}
      title={data.title[language]}
      icon={BsChatRightDotsFill}>
      Hello
    </Section>
  )
}

export default Contact
