import Link from 'next/link'
import { ListItem, Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export type HeaderLinkProps = {
  active: boolean
  href: string
} & LinkProps

const HeaderLink = ({
  active,
  href,
  children,
  mt,
  ...props
}: HeaderLinkProps) => (
  <ListItem mt={mt}>
    <Link href={href} passHref>
      <ChakraLink
        color={active ? 'primary.400' : 'white'}
        fontSize="xl"
        textDecoration="none !important"
        _hover={{ opacity: '0.8' }}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  </ListItem>
)

export default HeaderLink
