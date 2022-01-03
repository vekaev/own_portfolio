const numberWithCommas = num => num.toLocaleString("en-US")
const getAttemptsStirng = (num, plural = true) =>
  `${num} ${plural ? 'attempts' : 'attempt'}`
const calcGuesses = highNumber => Math.round(Math.log2(highNumber))

export { numberWithCommas, getAttemptsStirng, calcGuesses }
