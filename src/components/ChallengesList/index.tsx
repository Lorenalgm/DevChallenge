import {
  Flex,
  FlexProps,
  List,
  ListItem,
  Heading,
  Divider
} from '@chakra-ui/react'

import Wrapper from 'components/Wrapper'
import ChallengePreviewCard, {
  ChallengePreviewProps
} from 'components/ChallengePreviewCard'

export type ChallengesListProps = {
  challenges: ChallengePreviewProps[]
} & FlexProps

const ChallengesList = ({ challenges, ...props }: ChallengesListProps) => (
  <Flex flexDirection="column" {...props}>
    <Wrapper>
      <Heading>Desafios</Heading>
    </Wrapper>

    <Divider mt="2" />

    <Wrapper>
      <List
        display="grid"
        marginTop="8"
        marginX="auto"
        gridTemplateColumns={[
          '1fr',
          '1fr',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)'
        ]}
        gridGap={['6', '6', '6', '8', '10']}
      >
        {challenges.map((challenge) => (
          <ListItem key={challenge.id}>
            <ChallengePreviewCard
              id={challenge.id}
              name={challenge.name}
              background={challenge.background}
              description={challenge.description}
              level={challenge.level}
              type={challenge.type}
              techs={challenge.techs}
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  </Flex>
)

export default ChallengesList
