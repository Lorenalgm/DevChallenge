import { fireEvent, render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import NewsletterForm, { NewsletterFormProps } from '.'

const props: NewsletterFormProps = {
  isLoading: false,
  onSubmit: jest.fn()
}

describe('<NewsletterForm />', () => {
  describe('when not loading', () => {
    it('should render with email input and submit button', () => {
      render(<NewsletterForm {...props} />)

      expect(screen.getByRole('textbox', { name: /email/i })).not.toBeDisabled()
      expect(
        screen.getByRole('button', { name: /inscrever/i })
      ).not.toBeDisabled()
    })

    it('should dispatch onSubmit when form is submitted', async () => {
      const onSubmit = jest.fn()
      render(<NewsletterForm {...props} onSubmit={onSubmit} />)

      const emailField = screen.getByRole('textbox', { name: /email/i })
      const submitButton = screen.getByRole('button', { name: /inscrever/i })

      const text = 'user@email.com'
      userEvent.type(emailField, text)

      await waitFor(() => {
        expect(emailField).toHaveValue(text)
      })

      fireEvent.click(submitButton)
      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(text)
    })
  })

  describe('when loading', () => {
    it('should render with email input and submit button disabled', () => {
      render(<NewsletterForm {...props} isLoading />)

      expect(screen.getByRole('textbox', { name: /email/i })).toBeDisabled()
      expect(screen.getByRole('button', { name: /inscrever/i })).toBeDisabled()
    })
  })
})
