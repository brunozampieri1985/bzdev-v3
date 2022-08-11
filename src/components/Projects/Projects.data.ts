type ProjectType = {
  title: string
  description: {
    en: string
    pt: string
  }
  image: string
  url: string
}

const projects: ProjectType[] = [
  {
    title: 'Cozinha de Nutri',
    image: '',
    description: {
      en: 'A web application that allows you to order food online.',
      pt: 'Uma aplicação web que permite você fazer pedidos de marmitas fit online.',
    },
    url: 'https://www.cozinhadenutri.com.br',
  },
  {
    title: 'SupriMetais',
    image: '',
    description: {
      en: 'An institutional web site for a metals retailer',
      pt: 'Website institucional para um revendedor de metais',
    },
    url: 'https://www.suprimetais.com.br',
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
