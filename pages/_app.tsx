// Global component common across all different pages
// You can keep state which needs to be persisted across pages.
import '../styles/global.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}