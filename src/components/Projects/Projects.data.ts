import Project from "@interfaces/Project"

const projects: Project[] = [
  {
    title: 'Cozinha de Nutri',
    image: '/cozinhadenutri.webp',
    description: {
      en: 'A web application that allows to order food online.',
      pt: 'Uma aplicação web que permite fazer pedidos de marmitas fit online.',
    },
    status: 100,
    url: 'https://www.cozinhadenutri.com.br',
    tech: ['css', 'react.js', 'next.js', 'typescript', 'vercel']
  },
  {
    title: 'SupriMetais',
    image: '/suprimetais.webp',
    description: {
      en: 'An institutional web site for a metals retailer',
      pt: 'Website institucional para um revendedor de metais',
    },
    status: 85,
    url: 'https://www.suprimetais.com.br',
    tech: ['css', 'react.js', 'Next.JS', 'typescript', 'vercel']
  },
  {
    title: 'BZDEV.',
    image: '/bzdev.webp',
    description: {
      en: 'My personal portfolio.',
      pt: 'Meu portifolio pessoal.',
    },
    status: 100,
    url: 'https://www.suprimetais.com.br',
    tech: ['css', 'react.js', 'next.js', 'typescript', 'vercel', 'unit test - jest']
  },
  {
    title: 'Seu projeto/Your Project',
    image: '/your-project.webp',
    description: {
      en: 'This could be your project',
      pt: 'Este pode ser seu projeto',
    },
    status: 0,
    url: '#Contact',
    tech: []
  },
]

const data = {
  title: {
    en: 'Projects',
    pt: 'Projetos',
  },
  description: {
    en: 'Here you can find some of my recent projects',
    pt: 'Aqui você pode encontrar alguns dos meus projetos recentes',
  },
  projects,
}

export default data
