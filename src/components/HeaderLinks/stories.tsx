import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import HeaderLinks, { HeaderLinksProps } from '.'

export default {
  title: 'HeaderLinks',
  component: HeaderLinks,
  decorators: [withNextRouter]
} as Meta

export const Desktop: Story<HeaderLinksProps> = (args) => (
  <HeaderLinks {...args} mode="desktop" />
)

export const Mobile: Story<HeaderLinksProps> = (args) => (
  <HeaderLinks {...args} mode="mobile" />
)
