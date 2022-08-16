import styles from './Contact.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import data from './Contact.data'
import { BsChatRightDotsFill } from 'react-icons/bs'
import Section from '@components/Section'
import Socials from '@components/Socials'
import Input from '@components/Input'
import { useState } from 'react'
import useScreenSize from '@hooks/useScreenSize'
import Button from '@components/Button'

const Contact: React.FC = () => {
  const { language } = useLanguage()
  const { theme, thm } = useTheme()
  const { width, height } = useScreenSize()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const placeholders = {
    name: {
      en: 'Your Name',
      pt: 'Digite seu nome',
    },
    email: {
      en: 'Your Email',
      pt: 'Digite seu email',
    },
    message: {
      en: 'Your Message',
      pt: 'Digite sua mensagem',
    },
  }

  return (
    <Section
      id="Contact"
      description={data.description[language]}
      title={data.title[language]}
      icon={BsChatRightDotsFill}>
      <div className={styles.container}>
        <div className={styles.form}>
          <Input
            type="text"
            value={formData.name}
            placeholder={placeholders.name[language]}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
          <Input
            type="email"
            value={formData.email}
            placeholder={placeholders.email[language]}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
          <Input
            type="textarea"
            value={formData.message}
            placeholder={placeholders.message[language]}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />
          <div className={styles.actions}>
            <Button>{language === 'en' ? 'Send' : 'Enviar'}</Button>
            <Button variant='secondary'>{language === 'en' ? 'Clear' : 'Limpar'}</Button>
          </div>
        </div>
        <div className={styles.socials}>
          <Socials size={width > 768 ? 36 : 20} />
        </div>
      </div>
    </Section>
  )
}

export default Contact
