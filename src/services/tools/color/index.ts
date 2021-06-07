import { BackgroundProps } from '@chakra-ui/react'

const levelColors: BackgroundProps['bg'] = {
  beginner: 'green.700',
  intermediate: 'orange.700',
  advanced: 'red.700'
}

const getLevelColor = (level: string) => levelColors[level.toLocaleLowerCase()]

export const typeColors: BackgroundProps['bg'] = {
  mobile: 'blue.700',
  frontend: 'pink.700',
  backend: 'purple.700'
}

const getTypeColor = (type: string) => typeColors[type.toLocaleLowerCase()]

export default {
  getLevelColor,
  getTypeColor
}
