import type { AppProps } from 'next/app'
import AppTemplate from '../components/Templates/AppTemplate'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AppTemplate>
         <Component {...pageProps} />
      </AppTemplate>
   )
}
