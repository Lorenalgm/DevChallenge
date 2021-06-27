import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'
import AwesomeSlider from 'react-awesome-slider'

export const ImagesContainer = styled(Flex)`
  width: 100%;
  max-width: 47em;
  border-radius: 10px;
`

export const Slider = styled(AwesomeSlider)`
  width: 100%;
  height: 100%;

  .awssld__wrapper {
    border-radius: 10px;
  }

  .awssld__bullets {
    bottom: 0;
    z-index: 9999;
    padding: 10px 0;
    transition: 0.4s;
  }

  .awssld__bullets:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  button.awssld__prev,
  button.awssld__next {
    transition: box-shadow 0.3s ease;

    &:focus-visible {
      box-shadow: 0 0 0 3px var(--chakra-colors-secondary-200);
    }
  }

  .awssld__bullets button {
    border: 3px solid var(--chakra-colors-primary-400);
    background-color: rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s ease;

    &:focus-visible {
      box-shadow: 0 0 0 3px var(--chakra-colors-secondary-200);
    }
  }

  .awssld__bullets .awssld__bullets--active {
    background-color: var(--chakra-colors-primary-400);
  }

  .awssld__content > div {
    width: 100%;
    height: 100%;
  }
`
