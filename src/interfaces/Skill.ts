export type SkillValue = {
  name: string
  value: number
}

export default interface Skill {
  title: {
    en: string
    pt: string
  }
  description: {
    en: string
    pt: string
  }
  skills: {
    frontend: SkillValue[]
    others: SkillValue[]   
  }
}
