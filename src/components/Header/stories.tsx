import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import Header from '.'

export default {
  title: 'Header',
  component: Header,
  decorators: [withNextRouter]
} as Meta

export const Default: Story = () => <Header />
