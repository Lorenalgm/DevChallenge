import { Story, Meta } from '@storybook/react/types-6-0'

import Typewriter, { TypewriterProps } from '.'

export default {
  title: 'Typewriter',
  component: Typewriter
} as Meta

export const Default: Story<TypewriterProps> = (args) => (
  <div
    style={{
      paddingTop: '20px',
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }}
  >
    <Typewriter {...args} />
  </div>
)

Default.args = {
  children: 'Typewriter'
}
