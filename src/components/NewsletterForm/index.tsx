import React, { useState } from 'react'
import { Stack, StackProps, FormControl, Input, Button } from '@chakra-ui/react'

export type NewsletterFormProps = {
  isLoading: boolean
  onSubmit: (email: string) => void
} & Omit<StackProps, 'onSubmit'>

const NewsletterForm = ({
  isLoading,
  onSubmit,
  ...props
}: NewsletterFormProps) => {
  const [email, setEmail] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.currentTarget.value
    setEmail(newEmail)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    onSubmit(email)
  }

  return (
    <Stack as="form" spacing="4" {...props} onSubmit={handleSubmit}>
      <FormControl id="email">
        <Input
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          isDisabled={isLoading}
          isRequired
          onChange={handleInputChange}
        />
      </FormControl>

      <Button size="lg" type="submit" isFullWidth isLoading={isLoading}>
        Inscrever
      </Button>
    </Stack>
  )
}

export default NewsletterForm
