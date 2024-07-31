import type { AppProps } from 'next/app'
import './globals.css'
import { CurrencyProvider } from '@/context/CurrencyContext'

 
export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}