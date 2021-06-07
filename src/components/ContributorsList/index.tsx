import { List, ListItem, Flex, FlexProps, Heading } from '@chakra-ui/react'

import ContributorCard, { ContributorProps } from 'components/ContributorCard'

export type ContributorsListProps = {
  contributors: ContributorProps[]
} & FlexProps

const ContributorsList = ({
  contributors,
  ...props
}: ContributorsListProps) => {
  if (!contributors.length) return null

  return (
    <Flex flexDirection="column" {...props}>
      <Heading textAlign="center">Últimas contribuições</Heading>

      <List
        display="grid"
        marginTop="8"
        marginX="auto"
        gridTemplateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)'
        ]}
        gridGap={['6', '6', '6', '8', '10']}
      >
        {contributors.map((contributor) => (
          <ListItem key={contributor.id}>
            <ContributorCard
              avatar={contributor.avatar}
              name={contributor.name}
              position={contributor.position}
              github={contributor.github}
              linkedin={contributor.linkedin}
            />
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default ContributorsList
