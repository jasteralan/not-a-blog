import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>"></link>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
