import { render, screen } from 'utils/test-utils'

import ChallengeTemplate, { ChallengeTemplateProps } from '.'

import { challengeMainInfo } from 'components/ChallengeMainInfo/mock'
import { challengeImages } from 'components/ChallengeImagesPresentation/mock'
import { contributor } from 'components/ContributorCard/mock'

const props: ChallengeTemplateProps = {
  challenge: {
    ...challengeMainInfo,
    brief: 'some brief',
    background: challengeImages[0],
    images: challengeImages,
    author: contributor
  }
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

describe('<ChallengeTemplate />', () => {
  beforeEach(() => {
    render(<ChallengeTemplate {...props} />)
  })

  it('should render wrapper on base template', () => {
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
  })

  it('should render with the challenge name', () => {
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
  })

  it('should render with the first imagem on presentation container', () => {
    expect(
      screen.getByRole('img', { name: /Challenge image presentation 1/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('img', { name: /Challenge image presentation 2/i })
    ).not.toBeInTheDocument()
  })

  it('should render with the brief', () => {
    expect(
      screen.getByRole('heading', { name: /Sobre o desafio/i, level: 2 })
    ).toBeInTheDocument()
    expect(
      screen.getByText(`Seu desafio é ${props.challenge.brief}`)
    ).toBeInTheDocument()
  })

  it('should render with the contributor card', () => {
    expect(
      screen.getByRole('img', { name: props.challenge.author.name })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.challenge.author.name })
    ).toBeInTheDocument()
  })
})
