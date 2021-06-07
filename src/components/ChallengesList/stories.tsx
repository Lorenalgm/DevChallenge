import { Story, Meta } from '@storybook/react/types-6-0'

import ChallengesList, { ChallengesListProps } from '.'

import { challenges } from './mock'

export default {
  title: 'ChallengesList',
  component: ChallengesList
} as Meta

export const Default: Story<ChallengesListProps> = (args) => (
  <div style={{ marginTop: '20px', paddingBottom: '20px' }}>
    <ChallengesList {...args} />
  </div>
)

Default.args = {
  challenges
}
