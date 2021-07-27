import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevChallenge</title>

        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Site para desenvolvedores melhorarem suas habilidades através de desafios de front-end, back-end e mobile!"
        />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="DevChallenge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devchallenge.com.br/" />
        <meta property="og:site_name" content="Dev Challenge" />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:image" content="/img/banner.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="620" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
