import { Box, useColorModeValue } from '@chakra-ui/react'

const Quote = ({ children }) => (
  <Box
    borderRadius="lg"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    p={3}
    mb={6}
    mt={2}
    align="center"
  >
    {children}
  </Box>
)

export default Quote
