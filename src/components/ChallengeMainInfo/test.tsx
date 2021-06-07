import { render, screen } from 'utils/test-utils'

import ChallengeMainInfo from '.'

import { challengeMainInfo } from './mock'

describe('<ChallengeMainInfo />', () => {
  beforeEach(() => {
    render(<ChallengeMainInfo {...challengeMainInfo} />)
  })

  it('should render with the challenge name', () => {
    expect(
      screen.getByRole('heading', { name: challengeMainInfo.name, level: 1 })
    ).toBeInTheDocument()
  })

  it('should render with type and level', () => {
    expect(screen.getByText(challengeMainInfo.type)).toBeInTheDocument()
    expect(screen.getByText(challengeMainInfo.level)).toBeInTheDocument()
  })

  it('should render with all techs', () => {
    challengeMainInfo.techs.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })

  it('should render with link to challenge initial url', () => {
    const initialProjectUrl = screen.getByRole('link', {
      name: /iniciar desafio/i
    })

    expect(initialProjectUrl).toBeInTheDocument()
    expect(initialProjectUrl).toHaveAttribute(
      'href',
      challengeMainInfo.initialProjectUrl
    )
    expect(initialProjectUrl).toHaveAttribute('target', '_blank')
    expect(initialProjectUrl).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
