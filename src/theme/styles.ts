const styles = {
  global: {
    'html, body': {
      bg: 'backgroundColor'
    },
    '#__next': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },

    'body::-webkit-scrollbar': {
      width: '0.75rem'
    },
    'body::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    'body::-webkit-scrollbar-thumb': {
      background: 'primary.400'
    },
    'body::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:active':
      {
        background: 'primary.600'
      },
    '::-moz-selection': {
      background: 'secondary.400',
      color: 'white'
    },
    '::selection': {
      background: 'secondary.400',
      color: 'white'
    }
  }
}

export default styles
