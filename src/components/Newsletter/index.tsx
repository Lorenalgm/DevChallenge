import {
  Flex,
  FlexProps,
  Heading,
  Text,
  Box,
  useToast,
  useBoolean
} from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'

import NewsletterForm from 'components/NewsletterForm'

import NewsletterResources from 'services/resources/newsletter'

const Newsletter = ({ ...props }: FlexProps) => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useBoolean()

  const handleSubmit = async (email: string) => {
    setIsLoading.on()
    const { error } = await NewsletterResources.saveEmail(email)
    setIsLoading.off()

    if (error) {
      toast({
        title: 'Opa, algo deu errado! Pode tentar novamente? :c',
        status: 'error',
        position: 'top-right',
        isClosable: true
      })

      return
    }

    toast({
      title: 'Feito! Você será o primeiro a saber sobre novos desafios :)',
      status: 'success',
      position: 'top-right',
      isClosable: true
    })
  }

  return (
    <Flex
      marginX="auto"
      alignItems="center"
      flexDirection={['column', 'column', 'row']}
      {...props}
    >
      <Box
        as={Player}
        autoplay={true}
        controls={false}
        loop={true}
        src="https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json"
        height="300px"
        width="300px"
        aria-label="developer video"
      />

      <Flex flexDirection="column" ml={[0, 0, '6', '10']}>
        <Heading as="h3" fontSize={['2xl', '3xl', '3xl', '4xl']}>
          Seja notificado sobre novos desafios!
        </Heading>

        <Text color="primary.500" fontSize={['md', 'lg', 'lg', 'xl']}>
          Inscreva-se para ser o primeiro a saber sobre novos desafios :)
        </Text>

        <NewsletterForm mt="6" isLoading={isLoading} onSubmit={handleSubmit} />
      </Flex>
    </Flex>
  )
}

export default Newsletter
