import { FlexProps, Image } from '@chakra-ui/react'

import * as S from './styles'
import 'react-awesome-slider/dist/styles.css'

export type ChallengeImagesPresentationProps = {
  images: string[]
} & FlexProps

const ChallengeImagesPresentation = ({
  images,
  ...props
}: ChallengeImagesPresentationProps) => (
  <S.ImagesContainer {...props}>
    <S.Slider bullets mobileTouch>
      {images.map((image, index) => (
        <div key={image}>
          <Image
            src={image}
            alt={`Challenge image presentation ${index + 1}`}
            height="full"
            width="full"
            objectFit="cover"
          />
        </div>
      ))}
    </S.Slider>
  </S.ImagesContainer>
)

export default ChallengeImagesPresentation
