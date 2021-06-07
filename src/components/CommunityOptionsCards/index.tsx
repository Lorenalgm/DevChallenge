import { List, ListProps, ListItem } from '@chakra-ui/react'
import { FaLightbulb, FaComment, FaCodeBranch } from 'react-icons/fa'

import InfoCard from 'components/InfoCard'

const options = [
  {
    name: 'Submeter <br /> novo desafio',
    icon: <FaLightbulb size="50" />,
    url: 'https://lgoesmontes.typeform.com/to/xKHESI'
  },
  {
    name: 'Participar <br /> da comunidade',
    icon: <FaComment size="50" />,
    url: 'https://discord.gg/yvYXhGj'
  },
  {
    name: 'Contribuir <br /> open source',
    icon: <FaCodeBranch size="50" />,
    url: 'https://github.com/Lorenalgm/DevChallenge'
  }
]

const CommunityOptionsCards = ({ ...props }: ListProps) => (
  <List
    display="grid"
    marginX="auto"
    gridTemplateColumns={[
      '1fr',
      '1fr',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)'
    ]}
    gridGap={['6', '6', '6', '8', '10']}
    {...props}
  >
    {options.map((option) => (
      <ListItem key={option.name}>
        <InfoCard icon={option.icon} href={option.url} isExternal>
          {option.name}
        </InfoCard>
      </ListItem>
    ))}
  </List>
)

export default CommunityOptionsCards
