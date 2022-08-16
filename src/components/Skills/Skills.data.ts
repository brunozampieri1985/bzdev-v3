import Skill from "@interfaces/Skill"


const data: Skill = {
  title: {
    en: 'Skills',
    pt: 'Habilidades',
  },
  description: {
    en: "Keppin' in mind that there's always something to learn.",
    pt: 'Tendo em mente que há sempre algo para aprender.',
  },
  skills: {
    frontend: [
      {
        name: 'HTML',
        value: 80,
      },
      {
        name: 'CSS',
        value: 80,
      },
      {
        name: 'JavaScript',
        value: 75,
      },
      {
        name: 'TypeScript',
        value: 75,
      },
      {
        name: 'React.JS',
        value: 75,
      },
      {
        name: 'Next.JS',
        value: 70,
      },
      {
        name: 'Redux',
        value: 60,
      },
    ],
    others: [
      {
        name: 'Node.JS',
        value: 70,
      },
      {
        name: 'Rest API',
        value: 70,
      },
      {
        name: 'Unit Test - Jest',
        value: 50,
      },
    ],
  },
}

export default data