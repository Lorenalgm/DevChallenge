import 'mock-use-router'
import { render, screen } from 'utils/test-utils'

import HeaderLinks from '.'

describe('<HeaderLinks />', () => {
  describe('desktop mode', () => {
    beforeEach(() => {
      render(<HeaderLinks mode="desktop" />)
    })

    it('should render with all nav links', () => {
      expect(screen.getByRole('link', { name: /início/i })).toHaveAttribute(
        'href',
        '/'
      )
      expect(screen.getByRole('link', { name: /desafios/i })).toHaveAttribute(
        'href',
        '/challenges'
      )
      expect(screen.getByRole('link', { name: /comunidade/i })).toHaveAttribute(
        'href',
        '/community'
      )
    })
  })

  describe('mobile mode', () => {
    beforeEach(() => {
      render(<HeaderLinks mode="mobile" />)
    })

    it('should render with all nav links', () => {
      expect(screen.getByRole('link', { name: /início/i })).toHaveAttribute(
        'href',
        '/'
      )
      expect(screen.getByRole('link', { name: /desafios/i })).toHaveAttribute(
        'href',
        '/challenges'
      )
      expect(screen.getByRole('link', { name: /comunidade/i })).toHaveAttribute(
        'href',
        '/community'
      )
    })
  })
})
