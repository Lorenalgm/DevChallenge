import { render, screen } from 'utils/test-utils'

import Footer from '.'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo" />
  }
}))

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should render with Logo component', () => {
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
  })

  it('should render with all links', () => {
    expect(
      screen.getByRole('link', { name: /visite nosso instagram/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /visite nosso discord/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /visite nosso twitter/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /visite nosso github/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('link')).toHaveLength(4)
  })
})
