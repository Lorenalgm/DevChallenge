import { Story, Meta } from '@storybook/react/types-6-0'
import { FaSearch } from 'react-icons/fa'

import Step, { StepProps } from '.'

export default {
  title: 'Step',
  component: Step
} as Meta

export const Default: Story<StepProps> = (args) => <Step {...args} />

Default.args = {
  icon: <FaSearch size="60" />,
  text: 'Escolha'
}
