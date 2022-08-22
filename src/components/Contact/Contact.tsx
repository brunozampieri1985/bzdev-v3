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

type FormFieldType = {
  content: string
  valid: boolean | null
  errorMessage: FormErrorMessage
}

type FormErrorMessage = {
  pt: string
  en: string
}

type FormData = {
  name: FormFieldType
  email: FormFieldType
  message: FormFieldType
  challenge: FormFieldType
}

const Contact: React.FC = () => {
  const { language } = useLanguage()
  const [challenge] = useState([
    Math.round(Math.random() * 10),
    Math.round(Math.random() * 10),
  ])
  const [isChallengeValid, setIsChallengeValid] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: {
      content: '',
      valid: null,
      errorMessage: {
        pt: '',
        en: '',
      },
    },
    email: {
      content: '',
      valid: null,
      errorMessage: {
        pt: '',
        en: '',
      },
    },
    message: {
      content: '',
      valid: null,
      errorMessage: {
        pt: '',
        en: '',
      },
    },
    challenge: {
      content: '',
      valid: null,
      errorMessage: {
        pt: '',
        en: '',
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
    challenge: {
      test: (value: string) => {
        return parseInt(value) === challenge[0] + challenge[1]
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
    challenge: `${challenge[0]} + ${challenge[1]} = ?`,
  }

  const handleValidate = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    var fieldType =
      field === 'email' ? 'email' : field === 'challenge' ? 'challenge' : 'text'
    var validateField = validate[
      fieldType as 'email' | 'text' | 'challenge'
    ].test(e.target.value)
    if (field === 'challenge')
      validateField ? setIsChallengeValid(true) : setIsChallengeValid(false)
    setFormData({
      ...formData,
      [field]: {
        ...formData[field as keyof typeof formData],
        valid: validateField,
        errorMsg: {
          pt: validateField ? '' : 'Por favor, preencha este campo corretamente',
          en: validateField ? '' : 'Please, fill this field correctly',
        }
        
      },
    })
  }

  const handleChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field as keyof typeof formData],
        content: e.target.value,
      },
    })
  }

  const handleClear = () => {
    setFormData({
      name: {
        content: '',
        valid: null,
        errorMessage: {
          pt: '',
          en: '',
        },
      },
      email: {
        content: '',
        valid: null,
        errorMessage: {
          pt: '',
          en: '',
        },
      },
      message: {
        content: '',
        valid: null,
        errorMessage: {
          pt: '',
          en: '',
        },
      },
      challenge: {
        content: '',
        valid: null,
        errorMessage: {
          pt: '',
          en: '',
        },
      },
    })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const errors: string[] = []
    Object.keys(formData).forEach((field) => {
      if (!formData[field as keyof typeof formData].valid) {
        errors.push(`Preencha o campos: ${field}`)
        return
      }
    })
    if (!isChallengeValid) errors.push('Resposta incorreta')
    if (errors.length > 0) {
      alert(errors.join('\n'))
      return
    }
    const mail = {
      from: formData.name.content, 
      email: formData.email.content, 
      message: formData.message.content
    }

    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail),
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
            onBlur={(e) => handleValidate('name', e)}
            valid={formData?.name.valid}
            value={formData?.name.content}
            errorMsg={formData?.name.errorMessage[language]}
            placeholder={placeholders.name[language]}
            onChange={(e) => handleChange('name', e)}
          />
          <Input
            type="email"
            onBlur={(e) => handleValidate('email', e)}
            value={formData?.email.content}
            valid={formData?.email.valid}
            errorMsg={formData?.email.errorMessage[language]}
            placeholder={placeholders.email[language]}
            onChange={(e) => handleChange('email', e)}
          />
          <Input
            type="textarea"
            onBlur={(e) => handleValidate('message', e)}
            valid={formData?.message.valid}
            value={formData?.message.content}
            errorMsg={formData?.message.errorMessage[language]}
            placeholder={placeholders.message[language]}
            onChange={(e) => handleChange('message', e)}
          />
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}>
            <p
              style={{
                width: '50px',
              }}>{`${challenge[0]} + ${challenge[1]}`}</p>
            <Input
              type="text"
              onBlur={(e) => handleValidate('challenge', e)}
              value={formData?.challenge.content}
              valid={formData?.challenge.valid}
              errorMsg={formData?.challenge.errorMessage[language]}
              placeholder={placeholders.challenge}
              onChange={(e) => handleChange('challenge', e)}
            />
          </div>
          <div className={styles.actions}>
            <Button onClick={(e) => handleSubmit(e)}>
              {language === 'en' ? 'Send' : 'Enviar'}
            </Button>
            <Button variant="secondary" onClick={handleClear}>
              {language === 'en' ? 'Clear' : 'Limpar'}
            </Button>
          </div>
        </div>
        <div className={styles.socials}>
          <Socials size={36} />
        </div>
      </div>
    </Section>
  )
}

export default Contact
