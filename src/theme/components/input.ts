import colors from '../foundations/colors'

const Input = {
  parts: ['field'],
  variants: {
    filled: {
      field: {
        bg: 'white',
        color: 'black',
        _hover: {
          bg: 'whiteAlpha.900'
        },
        _focus: {
          bg: 'whiteAlpha.900',
          borderColor: colors.primary[500],
          boxShadow: `0 0 0 3px ${colors.primary['300']}`
        },
        _placeholder: {
          color: 'blackAlpha.500'
        }
      }
    }
  },
  defaultProps: {
    size: 'lg',
    variant: 'filled'
  }
}

export default Input
