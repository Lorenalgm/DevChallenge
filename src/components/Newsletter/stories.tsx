import { Story, Meta } from '@storybook/react/types-6-0'

import Newsletter from '.'

export default {
  title: 'Newsletter',
  component: Newsletter
} as Meta

export const Default: Story = () => <Newsletter />
