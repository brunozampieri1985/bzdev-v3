import { FaHome, FaTools } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { BsChatRightDotsFill } from 'react-icons/bs'



type NavbarData = {
    name: {
        en: string,
        pt: string,
    },
    to: string,
    icon: React.ComponentType
}

const data = [
  {
    name: { en: 'Home', pt: 'Início' },
    to: '/',
    icon: FaHome

  },
  {
    name: { en: 'Projects', pt: 'Projetos' },
    to: '/projects',
    icon: FaTools

  },
  {
    name: { en: 'Skills', pt: 'Habilidades' },
    to: '/',
    icon: GiSkills

  },
  {
    name: { en: 'Contact', pt: 'Contato' },
    to: '/',
    icon: BsChatRightDotsFill
  },
]

export default data
