import Link from 'next/link'
import {
  Flex,
  Link as ChakraLink,
  Image,
  Heading,
  Box,
  Button,
  Text,
  Stack,
  Tag
} from '@chakra-ui/react'

import ColorTools from 'services/tools/color'
import TechTools from 'services/tools/techs'

export type ChallengePreviewProps = {
  id: string
  background: string
  name: string
  description: string
  type: string
  level: string
  techs: string[]
}

const ChallengePreviewCard = ({
  id,
  background,
  name,
  description,
  type,
  level,
  techs
}: ChallengePreviewProps) => {
  const typeColor = ColorTools.getTypeColor(type)
  const levelColor = ColorTools.getLevelColor(level)
  const serializedTechs = TechTools.serializeTechs(techs)

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      width="300px"
      height="350px"
      borderRadius="md"
      color="white"
      bg="gray.800"
      position="relative"
    >
      <Link href={`/challenges/${id}`} passHref>
        <ChakraLink>
          <Box
            width="300px"
            height="150px"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            overflow="hidden"
          >
            <Image
              src={background}
              alt={name}
              borderTopLeftRadius="md"
              borderTopRightRadius="md"
              transition="transform 0.3s ease"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </Box>
        </ChakraLink>
      </Link>

      <Stack position="absolute" top="16px" left="16px">
        <Tag fontWeight="bold" bg={typeColor} width="fit-content">
          {type}
        </Tag>
        <Tag fontWeight="bold" bg={levelColor} width="fit-content">
          {level}
        </Tag>
      </Stack>

      <Stack position="absolute" top="16px" right="16px" alignItems="flex-end">
        {serializedTechs.map((tech) => (
          <Tag key={tech} width="fit-content" bg="gray.500" fontWeight="bold">
            {tech}
          </Tag>
        ))}
      </Stack>

      <Flex
        flexDirection="column"
        height="full"
        paddingTop="2"
        paddingBottom="4"
        paddingX="4"
        textAlign="center"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Link href={`/challenges/${id}`} passHref>
            <ChakraLink display="block">
              <Heading as="h3" fontSize="2xl">
                {name}
              </Heading>
            </ChakraLink>
          </Link>

          <Text mt="2">{description}</Text>
        </Box>
        <Link href={`/challenges/${id}`} passHref>
          <Button
            as="a"
            transition="width 0.3s ease"
            width="90%"
            size="lg"
            _hover={{ width: '100%' }}
          >
            Ver detalhes
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default ChallengePreviewCard
