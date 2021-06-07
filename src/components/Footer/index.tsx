import { Flex, FlexProps, Stack } from '@chakra-ui/react'

import Wrapper from 'components/Wrapper'
import SocialMediaLinkIcon from 'components/SocialMediaLinkIcon'
import Logo from 'components/Logo'

const Footer = ({ ...props }: FlexProps) => (
  <Flex as="footer" bg="gray.800" {...props}>
    <Wrapper
      paddingY="6"
      flexDirection={['column', 'row-reverse']}
      alignItems="center"
      justifyContent={['center', 'space-between']}
    >
      <Logo />

      <Stack
        as="ul"
        listStyleImg="none"
        listStyleType="none"
        direction="row"
        spacing="2"
        mt={['4', 0]}
      >
        <li>
          <SocialMediaLinkIcon
            icon="instagram"
            aria-label="visite nosso instagram"
            href="https://www.instagram.com/devchallenge"
          />
        </li>
        <li>
          <SocialMediaLinkIcon
            icon="discord"
            aria-label="visite nosso discord"
            href="https://discord.gg/yvYXhGj"
          />
        </li>
        <li>
          <SocialMediaLinkIcon
            icon="twitter"
            aria-label="visite nosso twitter"
            href="https://twitter.com/dev_challenge"
          />
        </li>
        <li>
          <SocialMediaLinkIcon
            icon="github"
            aria-label="visite nosso github"
            href="https://github.com/devchallenge-io"
          />
        </li>
      </Stack>
    </Wrapper>
  </Flex>
)

export default Footer
