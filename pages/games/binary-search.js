import { Container, Heading } from '@chakra-ui/react'
import { StepOne, StepTwo, StepThree } from '../../components/games/Steps'
import MultiStepsFlow from '../../components/games/MultiStepsFlow'
import Quote from '../../components/quote'

const BinarySearch = () => {
  return (
    <Container>
      <Quote>
        <Heading as="h2">Hi</Heading>
        this game created to illustrate
        <Heading as="h1">binary search algorithm</Heading>
        and to show why using brain is so efficient
      </Quote>
      <MultiStepsFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </MultiStepsFlow>
    </Container>
  )
}

export default BinarySearch
