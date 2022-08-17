import styles from './Contact.module.css'
import { useLanguage } from '@contexts/LanguageProvider'
import data from './Contact.data'
import { BsChatRightDotsFill } from 'react-icons/bs'
import Section from '@components/Section'
import Socials from '@components/Socials'
import Input from '@components/Input'
import { useState } from 'react'
import useScreenSize from '@hooks/useScreenSize'
import Button from '@components/Button'
import SendMail from 'src/lib/sendmail'

const Contact: React.FC = () => {
  const { language } = useLanguage()  
  const { width } = useScreenSize()
  const [formData, setFormData] = useState({
    name: {
      content: '',
      valid: null,
      errorMessage: {
        en: 'Name is required',
        pt: 'Nome é obrigatório',
      },
    },
    email: {
      content: '',
      valid: null,
      errorMessage: {
        en: 'Please insert a valid email',
        pt: 'Por favor insira um email válido',
      },
    },
    message: {
      content: '',
      valid: null,
      errorMessage: {
        en: 'Message is required',
        pt: 'Mensagem é obrigatória',
      },
    },
  })

  const validate = {
    text: {
      test: (value: string) => value.length > 3,
    },
    email: {
      test: (value: string) => {
        let regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(value)
      },
    },
  }

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

  const handleChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // change content
    setFormData({
      ...formData,
      [field]: {
        ...formData[field as keyof typeof formData],
        content: e.target.value,
      },
    })
    // validate content
    var fieldType = field === 'email' ? 'email' : 'text'
    var validateField = validate[fieldType as 'email' | 'text'].test(
      e.target.value
    )
    setFormData({
      ...formData,
      [field]: {
        ...formData[field as keyof typeof formData],
        valid: validateField,
      },
    })
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
            valid={formData.name.valid}
            value={formData.name.content}
            errorMsg={formData.name.errorMessage[language]}
            placeholder={placeholders.name[language]}
            onChange={(e) => handleChange('name', e)}
          />
          <Input
            type="email"
            value={formData.email.content}
            valid={formData.email.valid}
            errorMsg={formData.email.errorMessage[language]}
            placeholder={placeholders.email[language]}
            onChange={(e) => handleChange('email', e)}
          />
          <Input
            type="textarea"
            valid={formData.message.valid}
            value={formData.message.content}
            errorMsg={formData.message.errorMessage[language]}
            placeholder={placeholders.message[language]}
            onChange={(e) => handleChange('message', e)}
          />
          <div className={styles.actions}>
            <Button>{language === 'en' ? 'Send' : 'Enviar'}</Button>
            <Button variant="secondary">
              {language === 'en' ? 'Clear' : 'Limpar'}
            </Button>
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
