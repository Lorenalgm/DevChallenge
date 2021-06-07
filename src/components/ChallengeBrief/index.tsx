import {
  Flex,
  FlexProps,
  Grid,
  Heading,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  Box,
  OrderedList
} from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'

import includedItems from './includedItems.json'
import stepsToStart from './stepsToStart.json'

export type ChallengeBriefProps = {
  brief: string
} & FlexProps

const ChallengeBrief = ({ brief, ...props }: ChallengeBriefProps) => (
  <Flex flexDirection="column" {...props}>
    <Heading color="secondary.400">Sobre o desafio</Heading>

    <Text>Seu desafio é {brief}</Text>

    <Grid
      mt="10"
      mx="auto"
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
      gridGap={['4', '4', '4', '6', '16']}
    >
      <Box>
        <Heading as="h3" color="secondary.400" fontSize="xl">
          O que está incluso?
        </Heading>
        <UnorderedList listStyleType="none" mt="2" ml="0" spacing={1}>
          {includedItems.map((includedItem) => (
            <ListItem key={includedItem.id} aria-label={includedItem.text}>
              <ListIcon as={FaCheck} color="green.500" />
              {includedItem.text}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box>
        <Heading as="h3" color="secondary.400" fontSize="xl">
          Como iniciar?
        </Heading>
        <OrderedList listStyleType="none" mt="2" ml="0" spacing={1}>
          {stepsToStart.map((stepToStart, index) => (
            <ListItem key={stepToStart.id} aria-label={stepToStart.text}>
              <Box as="span" color="primary.400" fontWeight="bold" mr="2">
                {index + 1} -
              </Box>
              {stepToStart.text}
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </Grid>
  </Flex>
)

export default ChallengeBrief
