import { Story, Meta } from '@storybook/react/types-6-0'

import CommunityOptionsCards from '.'

import Wrapper from 'components/Wrapper'

export default {
  title: 'CommunityOptionsCards',
  component: CommunityOptionsCards
} as Meta

export const Default: Story = () => (
  <Wrapper mt="10">
    <CommunityOptionsCards />
  </Wrapper>
)
