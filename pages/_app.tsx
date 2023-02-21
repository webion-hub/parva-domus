import { Layout } from '@/components/layout/Layout'
import { lightTheme } from '@/theme/lightTheme'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Parva Domus</title>
        <meta name="description" content="Parva Domus è la soluzione ideale per comprare, vendere o affittare un immobile. Offriamo servizi di intermediazione immobiliare, valutazione, consulenza fiscale e legale e gestione degli affitti. Contattaci oggi per trovare l'immobile dei tuoi sogni!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeProvider
          theme={lightTheme}
        >
          <GlobalStyles
            styles={{
              "html": {
                scrollBehavior: 'smooth'
              }
            }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </main>
    </>

  )
}
