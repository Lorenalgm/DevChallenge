import {
  Button,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Tag,
  Text
} from '@chakra-ui/react'

import ColorTools from 'services/tools/color'
import TechTools from 'services/tools/techs'

export type ChallengeMainInfoProps = {
  name: string
  description: string
  type: string
  level: string
  techs: string[]
  initialProjectUrl: string
} & FlexProps

const ChallengeMainInfo = ({
  name,
  description,
  type,
  level,
  techs,
  initialProjectUrl,
  ...props
}: ChallengeMainInfoProps) => {
  const typeColor = ColorTools.getTypeColor(type)
  const levelColor = ColorTools.getLevelColor(level)
  const serializedTechs = TechTools.serializeTechs(techs)

  return (
    <Flex flexDirection="column" maxW="400px" {...props}>
      <Heading as="h1" color="primary.400">
        {name}
      </Heading>

      <HStack flexWrap="wrap">
        <Tag fontWeight="bold" mt="2" mb="2" bg={typeColor}>
          {type}
        </Tag>
        <Tag fontWeight="bold" bg={levelColor}>
          {level}
        </Tag>
        {serializedTechs.map((tech) => (
          <Tag key={tech} fontWeight="bold">
            {tech}
          </Tag>
        ))}
      </HStack>

      <Text mt="3">{description}</Text>

      <Button
        as="a"
        href={initialProjectUrl}
        mt="6"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Iniciar desafio
      </Button>
    </Flex>
  )
}

export default ChallengeMainInfo
