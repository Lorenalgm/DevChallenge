import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  decorators: [withNextRouter]
} as Meta

export const Default: Story = () => (
  <div style={{ paddingTop: '20px' }}>
    <Banner />
  </div>
)
