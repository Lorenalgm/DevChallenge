import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Newsletter from '.'

import NewsletterResources from 'services/resources/newsletter'
const saveEmail = jest.spyOn(NewsletterResources, 'saveEmail')

describe('<Newsletter />', () => {
  it('should render correctly', () => {
    const { container } = render(<Newsletter />)

    expect(
      screen.getByRole('heading', {
        name: /seja notificado sobre novos desafios!/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Inscreva-se para ser o primeiro a saber sobre novos desafios :\)/i
      )
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /inscrever/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  describe('when NewsletterForm is submitted', () => {
    describe('when it succeeds', () => {
      beforeAll(() => {
        saveEmail.mockImplementation(
          jest.fn(() => Promise.resolve({ data: 'ok' }))
        )
      })

      it('should show a success message', async () => {
        render(<Newsletter />)

        const email = 'user@email.com'

        const emailField = screen.getByRole('textbox', { name: /email/i })
        const submitButton = screen.getByRole('button', { name: /inscrever/i })

        userEvent.type(emailField, email)
        await waitFor(() => {
          expect(emailField).toHaveValue(email)
        })

        userEvent.click(submitButton)
        await waitFor(() => {
          expect(
            screen.getByText(
              'Feito! Você será o primeiro a saber sobre novos desafios :)'
            )
          ).toBeInTheDocument()
        })
      })
    })

    describe('when it does not succeeds', () => {
      beforeAll(() => {
        saveEmail.mockImplementation(
          jest.fn(() => Promise.resolve({ error: 'ok' }))
        )
      })

      it('should show an error message', async () => {
        render(<Newsletter />)

        const email = 'user@email.com'

        const emailField = screen.getByRole('textbox', { name: /email/i })
        const submitButton = screen.getByRole('button', { name: /inscrever/i })

        userEvent.type(emailField, email)
        await waitFor(() => {
          expect(emailField).toHaveValue(email)
        })

        userEvent.click(submitButton)
        await waitFor(() => {
          expect(
            screen.getByText('Opa, algo deu errado! Pode tentar novamente? :c')
          ).toBeInTheDocument()
        })
      })
    })
  })
})
