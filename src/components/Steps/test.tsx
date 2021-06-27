import { render, screen } from 'utils/test-utils'

import Steps from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useMediaQuery = jest.spyOn(require('@chakra-ui/react'), 'useMediaQuery')

describe('<Steps />', () => {
  describe('with any view width', () => {
    beforeEach(() => {
      render(<Steps />)
    })

    it('should render with step "escolha"', () => {
      expect(
        screen.getByRole('heading', { name: /escolha/i })
      ).toBeInTheDocument()
    })

    it('should render with step "desenvolva"', () => {
      expect(
        screen.getByRole('heading', { name: /desenvolva/i })
      ).toBeInTheDocument()
    })

    it('should render with step "compartilhe"', () => {
      expect(
        screen.getByRole('heading', { name: /compartilhe/i })
      ).toBeInTheDocument()
    })
  })

  describe('when view width is less than 768px', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(() => [false])
      render(<Steps />)
    })

    it('should render icons with size 40', () => {
      expect(screen.getByLabelText(/escolha/i)).toHaveAttribute('width', '40')
      expect(screen.getByLabelText(/desenvolva/i)).toHaveAttribute(
        'width',
        '40'
      )
      expect(screen.getByLabelText(/compartilhe/i)).toHaveAttribute(
        'width',
        '40'
      )
    })
  })

  describe('when view width is larger than 768px', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(() => [true])
      render(<Steps />)
    })

    it('should render icons with size 60', () => {
      expect(screen.getByLabelText(/escolha/i)).toHaveAttribute('width', '60')
      expect(screen.getByLabelText(/desenvolva/i)).toHaveAttribute(
        'width',
        '60'
      )
      expect(screen.getByLabelText(/compartilhe/i)).toHaveAttribute(
        'width',
        '60'
      )
    })
  })
})
