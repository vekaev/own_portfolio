import {useCallback, useEffect, useMemo, useState} from 'react'
import { Button, Box, Spacer, Flex, Heading } from '@chakra-ui/react'

import { calcGuesses, getAttemptsStirng, numberWithCommas } from '../../utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Quote from '../quote'

const DefaultHighNumbers = ({
  highNumbers = [100, 1000, 10_000, 1_000_000, 1_000_000_000],
  onNextStep
}) =>
  highNumbers.map(highNumber => (
    <>
      <Button
        mt={0.5}
        key={highNumber}
        onClick={onNextStep.bind(null, highNumber)}
      >
        <b>{numberWithCommas(highNumber)}</b>
      </Button>
      {' - '}
      {getAttemptsStirng(calcGuesses(highNumber))}
      <br />
    </>
  ))

const MINIMUM_NUMBER = 100

const StepOne = ({
  onNextStep,
  highNumber: defaultHighNumber = MINIMUM_NUMBER
}) => {
  const [highNumber, setHighNumber] = useState(defaultHighNumber)

  const numberOfGuess = useMemo(() => calcGuesses(highNumber), [highNumber])
  const makeBigger = () => setHighNumber(Math.ceil(highNumber * 2))
  const makeLower =
    highNumber > MINIMUM_NUMBER
      ? () => setHighNumber(Math.round(highNumber / 2))
      : () => null

  return (
    <>
      <Quote>
        Pick any number from 1 to <b>{numberWithCommas(highNumber)}</b> and I
        will guess it by{' '}
        <b>{getAttemptsStirng(numberOfGuess, highNumber > 2)}</b>
      </Quote>
      <Flex align="center">
        <Button onClick={makeLower}>-</Button>
        <Spacer />
        <Button
          colorScheme="teal"
          onClick={() => onNextStep({ highNumber, numberOfGuess })}
        >
          {numberWithCommas(highNumber)}
        </Button>
        <Spacer />
        <Button onClick={makeBigger}>+</Button>
      </Flex>
      <br />
      <DefaultHighNumbers
        onNextStep={number =>
          onNextStep({ numberOfGuess: calcGuesses(number), highNumber: number })
        }
      />
      <Box flex={1} align="right">
        <Button
          mt={2}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          onClick={() => onNextStep({ highNumber, numberOfGuess })}
        >
          Next
        </Button>
      </Box>
    </>
  )
}

const StepTwo = ({ onNextStep, onPrevStep, ...props }) => {
  const [lowerNumber, setLowerNumber] = useState(0)
  const [highNumber, setHighNumber] = useState(props.highNumber)
  const [remainingGuesses, setRemainingNumbers] = useState(
    props.numberOfGuess - 1
  )

  const middleNumber = Math.round((lowerNumber + highNumber) / 2)
  const guessed = lowerNumber === highNumber - 1 || remainingGuesses === 0

  const finishGame = useCallback(() => {
    onNextStep({ guessedNumber: middleNumber })
  }, [middleNumber, onNextStep])

  useEffect(() => {
    if (guessed) {
      finishGame()
    }
  }, [finishGame, guessed])

  const makeGuess = callback => () => {
    setRemainingNumbers(remainingGuesses - 1)
    callback(middleNumber)
  }

  return (
    <>
      <Button
        leftIcon={<ChevronLeftIcon />}
        onClick={onPrevStep}
        colorScheme="teal"
        mb={2}
      >
        Back
      </Button>
      <Quote>
        <b>{getAttemptsStirng(remainingGuesses, remainingGuesses !== 1)} left</b>
      </Quote>
      <Flex mt={2}>
        <Button onClick={makeGuess(setHighNumber)}>Less</Button>
        <Spacer />
        <Button colorScheme="teal" onClick={finishGame}>
          {numberWithCommas(middleNumber)} ?
        </Button>
        <Spacer />
        <Button onClick={makeGuess(setLowerNumber)}>More</Button>
      </Flex>
    </>
  )
}

const StepThree = ({ guessedNumber, onNextStep }) => {
  return (
    <>
      <Quote>
        <Heading>{guessedNumber}</Heading>
      </Quote>
      <Box flex={1} align="center">
        <Button colorScheme="teal" onClick={onNextStep}>
          Try again
        </Button>
      </Box>
    </>
  )
}

export { StepOne, StepTwo, StepThree }
