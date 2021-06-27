import { Story, Meta } from '@storybook/react/types-6-0'

import Wrapper from 'components/Wrapper'

import ChallengePreviewCard, { ChallengePreviewProps } from '.'

import { challengePreview } from './mock'

export default {
  title: 'ChallengePreviewCard',
  component: ChallengePreviewCard
} as Meta

export const Default: Story<ChallengePreviewProps> = (args) => (
  <Wrapper mt="10">
    <ChallengePreviewCard {...args} />
  </Wrapper>
)

Default.args = { ...challengePreview }
