import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'
import { Flex } from '@chakra-ui/react'

import MobileMenu from '.'

export default {
  title: 'MobileMenu',
  component: MobileMenu,
  decorators: [withNextRouter]
} as Meta

export const Default: Story = () => (
  <Flex justifyContent="flex-end">
    <MobileMenu />
  </Flex>
)
