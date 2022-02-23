import '../styles/globals.css'
import { BaseProvider, LightTheme } from 'baseui'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import SEO from '../next-seo.config'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo {...SEO} />
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </>
  )
}

export default MyApp
