import { Story, Meta } from '@storybook/react/types-6-0'

import Wrapper from 'components/Wrapper'

import ChallengeBrief, { ChallengeBriefProps } from '.'

import { brief } from './mock'

export default {
  title: 'ChallengeBrief',
  component: ChallengeBrief
} as Meta

export const Default: Story<ChallengeBriefProps> = (args) => (
  <Wrapper mt="10">
    <ChallengeBrief {...args} />
  </Wrapper>
)

Default.args = {
  brief
}
