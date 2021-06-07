import { Story, Meta } from '@storybook/react/types-6-0'

import ContributorsList, { ContributorsListProps } from '.'
import { contributors } from './mock'

import Wrapper from 'components/Wrapper'

export default {
  title: 'ContributorsList',
  component: ContributorsList
} as Meta

export const Default: Story<ContributorsListProps> = (args) => (
  <Wrapper mt="10">
    <ContributorsList {...args} contributors={contributors} />
  </Wrapper>
)
