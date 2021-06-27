import { Story, Meta } from '@storybook/react/types-6-0'
import { FaDesktop } from 'react-icons/fa'

import InfoCard, { InfoCardProps } from '.'

export default {
  title: 'InfoCard',
  component: InfoCard
} as Meta

export const Default: Story<InfoCardProps> = (args) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '20px'
    }}
  >
    <InfoCard {...args} />
  </div>
)

Default.args = {
  text: 'Front-end',
  icon: <FaDesktop size="50" />,
  href: '/'
}
