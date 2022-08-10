import styles from './PageLayout.module.css'
import { useTheme } from '@contexts/ThemeProvider'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
}) => {
  const { thm } = useTheme()

  return (
    <div
      className={styles.pageLayout}
      style={{
        color: thm.text,
        backgroundColor: thm.background,
      }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default PageLayout
