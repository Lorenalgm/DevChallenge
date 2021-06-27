import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import config from './foundations/config'
import colors from './foundations/colors'
import shadows from './foundations/shadows'

// Component style overrides
import Button from './components/button'
import Input from './components/input'
import Drawer from './components/drawer'

const fonts = {
  heading: "'Roboto', Arial, Helvetica, sans-serif",
  body: "'Roboto', Arial, Helvetica, sans-serif"
}

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  components: {
    Button,
    Input,
    Drawer
  }
}
export default extendTheme(customTheme)
