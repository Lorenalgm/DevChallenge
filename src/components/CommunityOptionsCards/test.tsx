import { render, screen } from 'utils/test-utils'

import CommunityOptionsCards from '.'

describe('<CommunityOptionsCards />', () => {
  beforeEach(() => {
    render(<CommunityOptionsCards />)
  })

  it('should render a list with 3 options items', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('should render with front-end link', () => {
    const frontendLink = screen.getByRole('link', {
      name: /submeter novo desafio/i
    })

    expect(frontendLink).toBeInTheDocument()
    expect(frontendLink).toHaveAttribute(
      'href',
      'https://lgoesmontes.typeform.com/to/xKHESI'
    )
    expect(frontendLink).toHaveAttribute('target', '_blank')
    expect(frontendLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render with back-end link', () => {
    const backendLink = screen.getByRole('link', {
      name: /participar da comunidade/i
    })

    expect(backendLink).toBeInTheDocument()
    expect(backendLink).toHaveAttribute('href', 'https://discord.gg/yvYXhGj')
    expect(backendLink).toHaveAttribute('target', '_blank')
    expect(backendLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render with mobile link', () => {
    const mobileLink = screen.getByRole('link', {
      name: /Contribuir open source/i
    })

    expect(mobileLink).toBeInTheDocument()
    expect(mobileLink).toHaveAttribute(
      'href',
      'https://github.com/Lorenalgm/DevChallenge'
    )
    expect(mobileLink).toHaveAttribute('target', '_blank')
    expect(mobileLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
