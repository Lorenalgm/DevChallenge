import { render, screen } from 'utils/test-utils'

import ChallengePreviewCard from '.'

import { challengePreview } from './mock'

describe('<ChallengePreviewCard />', () => {
  beforeEach(() => {
    render(<ChallengePreviewCard {...challengePreview} />)
  })

  it('should render with 3 links to challenge detail', () => {
    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', `/challenges/${challengePreview.id}`)
    })
  })

  it('should render with background imagem', () => {
    expect(
      screen.getByRole('img', {
        name: challengePreview.name
      })
    ).toBeInTheDocument()
  })

  it('should render with background imagem', () => {
    expect(
      screen.getByRole('img', {
        name: challengePreview.name
      })
    ).toBeInTheDocument()
  })

  it('should render with challenge title', () => {
    expect(
      screen.getByRole('heading', {
        name: challengePreview.name,
        level: 3
      })
    ).toBeInTheDocument()
  })

  it('should render with challenge description', () => {
    expect(screen.getByText(challengePreview.description)).toBeInTheDocument()
  })

  it('should render with details button link', () => {
    expect(screen.getByRole('link', { name: /ver detalhes/i })).toHaveAttribute(
      'href',
      `/challenges/${challengePreview.id}`
    )
  })
})
