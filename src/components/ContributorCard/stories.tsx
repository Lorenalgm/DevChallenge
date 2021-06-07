import { Story, Meta } from '@storybook/react/types-6-0'

import Wrapper from 'components/Wrapper'

import ContributorCard, { ContributorProps } from '.'

import { contributor } from './mock'

export default {
  title: 'ContributorCard',
  component: ContributorCard
} as Meta

export const Default: Story<ContributorProps> = (args) => (
  <Wrapper mt="10" alignItems="center">
    <ContributorCard {...args} />
  </Wrapper>
)

Default.args = { ...contributor }
