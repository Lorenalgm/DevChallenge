import { Story, Meta } from '@storybook/react/types-6-0'

import CategoryCardList from '.'

import Wrapper from 'components/Wrapper'

export default {
  title: 'CategoryCardList',
  component: CategoryCardList
} as Meta

export const Default: Story = () => (
  <Wrapper mt="10">
    <CategoryCardList />
  </Wrapper>
)
