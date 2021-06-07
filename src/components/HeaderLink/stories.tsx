import { Story, Meta } from '@storybook/react/types-6-0'
import { List } from '@chakra-ui/react'

import HeaderLink, { HeaderLinkProps } from '.'

export default {
  title: 'HeaderLink',
  component: HeaderLink
} as Meta

export const Default: Story<HeaderLinkProps> = (args) => (
  <List>
    <HeaderLink {...args} />
  </List>
)

Default.args = {
  href: '/',
  children: 'HeaderLink',
  active: true
}
