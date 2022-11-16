import '../styles/globals.css'
import Head from "next/head"
import RootLayout from './layout'

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>V-Dress - Your virtual dressing girl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
