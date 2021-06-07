import { render, screen } from 'utils/test-utils'

import CommunityTemplate from '.'

import { contributors } from 'components/ContributorsList/mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

jest.mock('components/ContributorCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ContributorCard"></div>
    }
  }
})

describe('<CommunityTemplate />', () => {
  describe('when two contributors are provided', () => {
    beforeEach(() => {
      render(<CommunityTemplate contributors={[...contributors.slice(0, 2)]} />)
    })

    it('it should render with BaseTemplate', () => {
      expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
    })

    it('it should with CommunityOptionsCards links', () => {
      expect(
        screen.getByRole('link', {
          name: /submeter novo desafio/i
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /participar da comunidade/i
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /contribuir open source/i
        })
      ).toBeInTheDocument()
    })

    it('should render with ContributorsList heading', () => {
      expect(
        screen.getByRole('heading', {
          name: /Últimas contribuições/i,
          level: 2
        })
      ).toBeInTheDocument()
    })

    it('should render with two ContributorCard components', () => {
      expect(screen.getAllByTestId('Mock ContributorCard')).toHaveLength(2)
    })
  })

  describe('when no contributors are provided', () => {
    beforeEach(() => {
      render(<CommunityTemplate contributors={[]} />)
    })

    it('it should render with BaseTemplate', () => {
      expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
    })

    it('it should with CommunityOptionsCards links', () => {
      expect(
        screen.getByRole('link', {
          name: /submeter novo desafio/i
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /participar da comunidade/i
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /contribuir open source/i
        })
      ).toBeInTheDocument()
    })

    it('should render with ContributorsList heading', () => {
      expect(
        screen.queryByRole('heading', {
          name: /Últimas contribuições/i,
          level: 2
        })
      ).not.toBeInTheDocument()
    })

    it('should render with two ContributorCard components', () => {
      expect(screen.queryAllByTestId('Mock ContributorCard')).toHaveLength(0)
    })
  })
})
