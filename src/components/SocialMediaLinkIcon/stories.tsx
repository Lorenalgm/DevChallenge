import { Story, Meta } from '@storybook/react/types-6-0'

import SocialMediaLinkIcon, { SocialMediaLinkIconProps } from '.'

export default {
  title: 'SocialMediaLinkIcon',
  component: SocialMediaLinkIcon,
  argTypes: {
    icon: {
      type: 'select',
      options: ['instagram', 'discord', 'twitter', 'github']
    }
  }
} as Meta

export const Default: Story<SocialMediaLinkIconProps> = (args) => (
  <div style={{ padding: '20px' }}>
    <SocialMediaLinkIcon {...args} />
  </div>
)

Default.args = {
  href: '/',
  icon: 'github',
  'aria-label': 'visite o nosso github'
}
