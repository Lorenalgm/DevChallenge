import { List, ListProps, ListItem } from '@chakra-ui/react'
import { FaDesktop, FaCode, FaMobileAlt } from 'react-icons/fa'

import InfoCard from 'components/InfoCard'

const categories = [
  { name: 'Front-end', icon: <FaDesktop size="50" />, type: 'frontend' },
  { name: 'Back-end', icon: <FaCode size="50" />, type: 'backend' },
  { name: 'Mobile', icon: <FaMobileAlt size="50" />, type: 'mobile' }
]

const CategoryCardList = ({ ...props }: ListProps) => (
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
    {categories.map((category) => (
      <ListItem key={category.name}>
        <InfoCard
          text={category.name}
          icon={category.icon}
          href={`challenges?type=${category.type}`}
        />
      </ListItem>
    ))}
  </List>
)

export default CategoryCardList
