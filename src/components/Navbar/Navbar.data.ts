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
    to: '#Home',
    icon: FaHome

  },
  {
    name: { en: 'Projects', pt: 'Projetos' },
    to: '#Projects',
    icon: FaTools

  },
  {
    name: { en: 'Skills', pt: 'Habilidades' },
    to: '#Skills',
    icon: GiSkills

  },
  {
    name: { en: 'Contact', pt: 'Contato' },
    to: '/',
    icon: BsChatRightDotsFill
  },
]

export default data
