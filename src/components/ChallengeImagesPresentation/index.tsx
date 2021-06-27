import Image from 'next/image'
import { FlexProps } from '@chakra-ui/react'

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
            layout="fill"
            placeholder="blur"
            blurDataURL={image}
          />
        </div>
      ))}
    </S.Slider>
  </S.ImagesContainer>
)

export default ChallengeImagesPresentation
