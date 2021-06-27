import { Flex, FlexProps } from '@chakra-ui/react'

const Wrapper = ({ children, ...props }: FlexProps) => (
  <Flex
    width="90%"
    maxWidth="container.xl"
    mx="auto"
    flexDirection="column"
    {...props}
  >
    {children}
  </Flex>
)

export default Wrapper
