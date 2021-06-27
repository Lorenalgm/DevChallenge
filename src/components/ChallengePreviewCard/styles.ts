import NextImage from 'next/image'
import styled from '@emotion/styled'

export const Image = styled(NextImage)`
  border-radius: 0.375rem 0 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`
