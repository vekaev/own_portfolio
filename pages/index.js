import {
  Container,
  Box,
  Heading,
  Image,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Quote from '../components/quote'
// import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Quote>Hello, I&apos;m a full-stack developer based in Ukraine!</Quote>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yevhenii Petrenko
          </Heading>
          <p>Cold brew, technologies and dog lover</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ mad: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="images/yevhenii.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Info
        </Heading>
        <Paragraph>
          The main goal is to create a thing that will be useful to other people
          everyday.
        </Paragraph>
        <Box align="center" my={4}>
          {/*<NextLink href={'/works'}>*/}
          {/*  <Button m={4}*/}
          {/*          rightIcon={<ChevronRightIcon />}*/}
          {/*          colorScheme="teal">*/}
          {/*    My portfolio*/}
          {/*  </Button>*/}
          {/*</NextLink>*/}
          <a href="https://t.me/bookispanacea" target="_blank" rel="noreferrer">
            <Button m={2} rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Book blog
            </Button>
          </a>
          <a href="https://t.me/fromjuniortomiddle" target="_blank" rel="noreferrer">
            <Button m={2} rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Dev blog
            </Button>
          </a>
        </Box>
      </Section>
      {/*<Section delay={0.2}>*/}
      {/*  <Heading as="h3" variant="section-title">*/}
      {/*    Bio*/}
      {/*  </Heading>*/}
      {/*  {Object.entries({*/}
      {/*    1998: 'Born',*/}
      {/*    2015: 'Graduated from high school',*/}
      {/*    2019: 'Graduated from university',*/}
      {/*    'to present': 'Works as a developer'*/}
      {/*  }).map(([year, description], idx) => (*/}
      {/*    <BioSection key={year + idx}>*/}
      {/*      <BioYear>{year}</BioYear>*/}
      {/*      {description}*/}
      {/*    </BioSection>*/}
      {/*  ))}*/}
      {/*</Section>*/}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Japan, Volunteering,{' '}
          {/*<Link href="https://www.goodreads.com/user/show/140121795-yevhenii-petrenko" target="_blank">*/}
          Reading
          {/*</Link>*/}, Traveling, Yoga, Alpinism, Machine Learning
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
