import { useRouter } from 'next/router'
import { Box, List } from '@chakra-ui/react'

import HeaderLink from 'components/HeaderLink'

const NAV_LINKS = [
  { href: '/', title: 'Início' },
  { href: '/challenges', title: 'Desafios' },
  { href: '/community', title: 'Comunidade' }
]

export type HeaderLinksProps = {
  mode: 'mobile' | 'desktop'
}

const HeaderLinks = ({ mode }: HeaderLinksProps) => {
  const { asPath } = useRouter()

  return (
    <Box as="nav">
      <List
        display="flex"
        alignItems="center"
        {...(mode === 'mobile' ? { flexDirection: 'column' } : {})}
      >
        {NAV_LINKS.map((navLink) => (
          <HeaderLink
            key={navLink.title}
            href={navLink.href}
            active={asPath === navLink.href}
            {...(mode === 'mobile' ? { mt: '6' } : { ml: '5' })}
            title={navLink.title}
          >
            {navLink.title}
          </HeaderLink>
        ))}
      </List>
    </Box>
  )
}

export default HeaderLinks
