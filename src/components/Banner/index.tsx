import Link from 'next/link'
import { Button, Flex, FlexProps, Heading } from '@chakra-ui/react'

import Typewriter from 'components/Typewriter'

const Banner = ({ ...props }: FlexProps) => (
  <Flex flexDirection="column" alignItems="center" {...props}>
    <Typewriter fontSize={['1.7em', '4xl', '6xl']}>
      Melhore suas habilidades
    </Typewriter>

    <Heading
      as="h3"
      fontSize={['sm', 'xl', '2xl']}
      mt={['0']}
      color="primary.400"
    >
      Com desafios de front-end, back-end e mobile
    </Heading>

    <Link href="/challenges" passHref>
      <Button as="a" size="lg" mt={['5']} width="250px">
        Bora codar!
      </Button>
    </Link>
  </Flex>
)

export default Banner
