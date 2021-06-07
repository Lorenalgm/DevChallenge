import 'mock-use-router'
import { render, screen } from 'utils/test-utils'

import Header from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useMediaQuery = jest.spyOn(require('@chakra-ui/react'), 'useMediaQuery')

jest.mock('components/HeaderLinks', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock HeaderLinks" />
  }
}))

jest.mock('components/MobileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock MobileMenu" />
  }
}))

describe('<Header />', () => {
  describe('when width is larger than 768px', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(() => [true])

      render(<Header />)
    })

    it('should render with the logo as link to home', () => {
      expect(
        screen.getByRole('link', { name: /DevChallenge/i })
      ).toHaveAttribute('href', '/')
    })

    it('should render with HeaderLinks', () => {
      expect(screen.getByTestId('Mock HeaderLinks')).toBeInTheDocument()
    })

    it('should not render with MobileMenu', () => {
      expect(screen.queryByTestId('Mock MobileMenu')).not.toBeInTheDocument()
    })
  })

  describe('when width it not larger than 768px', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(() => [false])

      render(<Header />)
    })

    it('should render with the logo as link to home', () => {
      expect(
        screen.getByRole('link', { name: /DevChallenge/i })
      ).toHaveAttribute('href', '/')
    })

    it('should not render with HeaderLinks', () => {
      expect(screen.queryByTestId('Mock HeaderLinks')).not.toBeInTheDocument()
    })

    it('should not render with MobileMenu', () => {
      expect(screen.getByTestId('Mock MobileMenu')).toBeInTheDocument()
    })
  })
})
