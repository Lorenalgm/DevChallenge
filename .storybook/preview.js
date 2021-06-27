import '../.jest/next-image.mock'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../src/theme'
import './styles.css'

export const parameters = {
  backgrounds: {
    default: 'dark',
    layout: 'fullscreen',
    values: [
      {
        name: 'dark',
        value: theme.colors.backgroundColor
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={theme}>
      <Story />
    </ChakraProvider>
  )
]
