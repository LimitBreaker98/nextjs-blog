// Global component common across all different pages
// You can keep state which needs to be persisted across pages.
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}