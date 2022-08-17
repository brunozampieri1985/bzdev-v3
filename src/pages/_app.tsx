import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppProvider from '@contexts/AppProvider'
import ScreenSize from '@components/ScreenSize'

function Bzdev({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      {/* <ScreenSize/> */}
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default Bzdev
