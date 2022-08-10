import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Hero from '@components/Hero'
import Projects from '@components/Projects'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Projects />
    </PageLayout>
  )
}

export default Home
