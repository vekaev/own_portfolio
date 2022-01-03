import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'

const NAME = 'Yevhenii Petrenko'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yevhenii's homepage" />
        <meta name="author" content={NAME} />
        <meta name="author" content="vekaev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vekaev" />
        <meta name="twitter:creator" content="@vekaev" />
        {/*<meta name="twitter:image" content="/card.png" />*/}
        <meta property="og:site_name" content={`${NAME}'s Homepage`} />
        <meta property="og:type" content="website" />
        {/*<meta property="og:image" content="/card.png" />*/}
        <title>{NAME} - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        {/*<Footer />*/}
      </Container>
    </Box>
  )
}

export default Main
