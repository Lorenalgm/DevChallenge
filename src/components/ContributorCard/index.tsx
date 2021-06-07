import {
  Flex,
  Heading,
  Avatar,
  Text,
  Stack,
  Link as ChakraLink
} from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

export type ContributorProps = {
  id: string
  avatar: string
  name: string
  position: string
  github?: string
  linkedin?: string
}

const ContributorCard = ({
  avatar,
  name,
  position,
  github,
  linkedin
}: Omit<ContributorProps, 'id'>) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    maxWidth="300px"
    borderRadius="md"
    paddingX="4"
    paddingY="5"
    color="white"
    bg="gray.800"
  >
    <Avatar name={name} src={avatar} />

    <Flex flexDirection="column" marginX="4">
      <Heading as="h4" fontSize="md">
        {name}
      </Heading>

      <Text fontSize="smaller" color="primary.400">
        {position}
      </Text>
    </Flex>

    <Stack>
      {github && (
        <ChakraLink
          href={`https://github.com/${github}`}
          isExternal
          _hover={{ color: 'primary.400' }}
        >
          <FaGithubSquare
            size="20"
            aria-hidden="false"
            aria-label={`${name} github profile`}
          />
        </ChakraLink>
      )}

      {linkedin && (
        <ChakraLink
          href={`https://www.linkedin.com/${linkedin}`}
          isExternal
          _hover={{ color: 'primary.400' }}
        >
          <FaLinkedin
            size="20"
            aria-hidden="false"
            aria-label={`${name} linkedin profile`}
          />
        </ChakraLink>
      )}
    </Stack>
  </Flex>
)

export default ContributorCard
