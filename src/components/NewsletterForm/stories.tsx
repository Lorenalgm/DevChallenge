import { Story, Meta } from '@storybook/react/types-6-0'

import Wrapper from 'components/Wrapper'

import NewsletterForm, { NewsletterFormProps } from '.'

export default {
  title: 'NewsletterForm',
  component: NewsletterForm,
  argTypes: {
    onSubmit: { action: 'submitted' }
  }
} as Meta

export const Default: Story<NewsletterFormProps> = (args) => (
  <Wrapper maxW="600px" mt="10">
    <NewsletterForm {...args} />
  </Wrapper>
)

export const Loading: Story<NewsletterFormProps> = (args) => (
  <Wrapper maxW="600px" mt="10">
    <NewsletterForm {...args} isLoading />
  </Wrapper>
)
