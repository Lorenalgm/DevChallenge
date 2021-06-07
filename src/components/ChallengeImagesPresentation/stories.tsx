import { Story, Meta } from '@storybook/react/types-6-0'

import ChallengeImagesPresentation, {
  ChallengeImagesPresentationProps
} from '.'

import Wrapper from 'components/Wrapper'

import { challengeImages } from './mock'

export default {
  title: 'ChallengeImagesPresentation',
  component: ChallengeImagesPresentation
} as Meta

export const Default: Story<ChallengeImagesPresentationProps> = (args) => (
  <Wrapper mt="10">
    <ChallengeImagesPresentation {...args} />
  </Wrapper>
)

Default.args = {
  images: challengeImages
}
