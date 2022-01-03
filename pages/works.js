import {Button, Container} from '@chakra-ui/react'
import {ChevronRightIcon} from "@chakra-ui/icons";
import Quote from "../components/quote";

const Page = () => {
  return <Container><Quote>
    <p>Soon</p>
    <a href="https://github.com/vekaev" target="_blank" rel="noreferrer">
    <Button m={2} rightIcon={<ChevronRightIcon />} colorScheme="teal">
      My github
    </Button>
  </a>
  </Quote></Container>
}

export default Page
