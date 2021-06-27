import { Button, ButtonProps, Heading } from '@chakra-ui/react'

export type InfoCardProps = {
  icon: React.ReactElement
  text?: string
  href: string
  isExternal?: boolean
  children?: string
} & ButtonProps

const InfoCard = ({
  icon,
  text,
  href,
  isExternal = false,
  children
}: InfoCardProps) => (
  <Button
    as="a"
    href={href}
    variant="ghost"
    cursor="pointer"
    width="72"
    height="72"
    display="flex"
    flexDirection="column"
    color="primary.500"
    bg="gray.800"
    _hover={{ bg: 'gray.700', transform: 'scale(1.05)' }}
    _active={{ bg: 'gray.900' }}
    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {icon}
    {children ? (
      <Heading
        color="white"
        mt="5"
        fontSize="2xl"
        textAlign="center"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    ) : (
      <Heading color="white" mt="5" fontSize="2xl" textAlign="center">
        {text}
      </Heading>
    )}
  </Button>
)

export default InfoCard
