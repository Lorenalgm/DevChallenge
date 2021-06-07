import { Story, Meta } from '@storybook/react/types-6-0'

import Wrapper from 'components/Wrapper'

import ChallengeMainInfo, { ChallengeMainInfoProps } from '.'

import { challengeMainInfo } from './mock'

export default {
  title: 'ChallengeMainInfo',
  component: ChallengeMainInfo
} as Meta

export const Default: Story<ChallengeMainInfoProps> = (args) => (
  <Wrapper mt="10">
    <ChallengeMainInfo {...args} />
  </Wrapper>
)

Default.args = {
  ...challengeMainInfo
}
