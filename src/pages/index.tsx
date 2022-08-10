import Hero from '@components/Hero'
import PageLayout from '@components/PageLayout'
import { useTheme } from '@contexts/ThemeProvider'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { theme, changeTheme } = useTheme()
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  )
}

export default Home
