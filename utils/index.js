const numberWithCommas = num =>
  num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
const getAttemptsStirng = (num, plural = true) =>
  `${num} ${plural ? 'attempts' : 'attempt'}`
const calcGuesses = highNumber => Math.round(Math.log2(highNumber))

export { numberWithCommas, getAttemptsStirng, calcGuesses }
