import { Box, HeadingProps } from '@chakra-ui/react'

import * as S from './styles'

export type TypewriterProps = HeadingProps

const Typewriter = ({ ...props }: TypewriterProps) => (
  <Box width="fit-content">
    <S.Typewriter {...props} />
  </Box>
)

export default Typewriter
