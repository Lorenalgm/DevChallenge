import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NextNprogress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import theme from 'theme'
import Fonts from 'theme/foundations/fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0e0f10" />
      </Head>
      <DefaultSeo {...SEO} />
      <Fonts />

      <NextNprogress
        color={theme.colors.primary[400]}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
