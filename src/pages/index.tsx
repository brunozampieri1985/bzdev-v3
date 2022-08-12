import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Hero from '@components/Hero'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import Contact from '@components/Contact'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </PageLayout>
  )
}

export default Home
