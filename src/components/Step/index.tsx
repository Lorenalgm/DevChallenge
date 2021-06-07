import { Box, BoxProps, Heading } from '@chakra-ui/react'

export type StepProps = {
  icon: React.ReactElement
  text: string
} & BoxProps

const Step = ({ icon, text }: StepProps) => (
  <Box
    width="48"
    height="48"
    padding="4"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    color="white"
  >
    {icon}
    <Heading mt="5" fontSize={['md', 'xl', '2xl']} color="primary.500">
      {text}
    </Heading>
  </Box>
)

export default Step
