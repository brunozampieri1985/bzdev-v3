import Project from "@interfaces/Project"

const projects: Project[] = [
  {
    title: 'Cozinha de Nutri',
    image: '/cozinhadenutri.webp',
    description: {
      en: 'A web application that allows to order food online.',
      pt: 'Uma aplicação web que permite fazer pedidos de marmitas fit online.',
    },
    url: 'https://www.cozinhadenutri.com.br',
  },
  {
    title: 'SupriMetais',
    image: '/suprimetais.webp',
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
