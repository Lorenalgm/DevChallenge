import Link from 'next/link'
import {
  Flex,
  FlexProps,
  Link as ChakraLink,
  useMediaQuery
} from '@chakra-ui/react'

import Logo from 'components/Logo'
import Wrapper from 'components/Wrapper'
import HeaderLinks from 'components/HeaderLinks'
import MobileMenu from 'components/MobileMenu'

const Header = ({ ...props }: FlexProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <Flex as="header" {...props}>
      <Wrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pt="4"
      >
        <Link href="/" passHref>
          <ChakraLink
            title="DevChallenge"
            textDecoration="none !important"
            _hover={{ opacity: '0.8' }}
          >
            <Logo as="h1" />
          </ChakraLink>
        </Link>

        {isLargerThan768 ? <HeaderLinks mode="desktop" /> : <MobileMenu />}
      </Wrapper>
    </Flex>
  )
}

export default Header
