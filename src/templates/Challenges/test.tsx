import { render, screen } from 'utils/test-utils'

import ChallengesTemplate from '.'

import { challenges } from 'components/ChallengesList/mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

describe('<ChallengesTemplate />', () => {
  beforeEach(() => {
    render(<ChallengesTemplate challenges={challenges.slice(0, 2)} />)
  })

  it('should render wrapper on base template', () => {
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
  })

  it('should render with the title', () => {
    expect(
      screen.getByRole('heading', { name: /Desafios/i })
    ).toBeInTheDocument()
  })

  it('should render with the challenges background image', () => {
    expect(
      screen.getAllByRole('img', {
        name: challenges[0].name
      })
    ).toHaveLength(2)
  })

  it('should render with the challenges background image', () => {
    expect(
      screen.getAllByRole('heading', {
        name: challenges[0].name,
        level: 3
      })
    ).toHaveLength(2)
  })
})
