import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/react'

export const Typewriter = styled(Heading)`
  border-right: 0.15em solid var(--chakra-colors-secondary-600);
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.02em;
  width: fit-content;
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--chakra-colors-secondary-600);
    }
  }
`
