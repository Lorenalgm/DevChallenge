import colors from '../foundations/colors'

const Button = {
  baseStyle: {
    fontWeight: 'bold'
  },
  variants: {
    solid: {
      bg: colors.secondary[500],
      color: 'white',
      _hover: {
        bg: colors.secondary[400]
      },
      _active: {
        bg: colors.secondary[200]
      },
      _focus: {
        boxShadow: `0 0 0 3px ${colors.secondary[300]}`
      }
    }
  }
}

export default Button
