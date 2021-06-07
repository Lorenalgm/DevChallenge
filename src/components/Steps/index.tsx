import { Flex, FlexProps, useMediaQuery } from '@chakra-ui/react'
import { FaSearch, FaCode, FaShareSquare } from 'react-icons/fa'

import Step from 'components/Step'

const Steps = ({ ...props }: FlexProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const iconsSize = isLargerThan768 ? '60' : '40'

  return (
    <Flex
      justifyContent="space-between"
      width="full"
      maxWidth="900px"
      marginX="auto"
      {...props}
    >
      <Step
        text="Escolha"
        icon={<FaSearch aria-label="Escolha" size={iconsSize} />}
      />

      <Step
        text="Desenvolva"
        icon={<FaCode aria-label="Desenvolva" size={iconsSize} />}
      />

      <Step
        text="Compartilhe"
        icon={<FaShareSquare aria-label="Compartilhe" size={iconsSize} />}
      />
    </Flex>
  )
}

export default Steps
