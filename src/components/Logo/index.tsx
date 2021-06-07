import { Heading, Box, HeadingProps } from '@chakra-ui/react'

const Logo = ({ ...props }: HeadingProps) => (
  <Heading textDecoration="none" {...props}>
    Dev
    <Box as="span" color="primary.400">
      Challenge
    </Box>
  </Heading>
)

export default Logo
