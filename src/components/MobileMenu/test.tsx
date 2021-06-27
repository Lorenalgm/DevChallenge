import 'mock-use-router'
import { render, screen, fireEvent } from 'utils/test-utils'

import MobileMenu from '.'

describe('<MobileMenu />', () => {
  beforeEach(() => {
    render(<MobileMenu />)
  })

  it('should render with only a button to open menu', () => {
    expect(
      screen.getByRole('button', { name: /open menu/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('button', { name: /close menu/i })
    ).not.toBeInTheDocument()

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('should handle open/close menu', () => {
    // closed menu
    expect(
      screen.getByRole('button', { name: /open menu/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /close menu/i })
    ).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()

    // click to open menu
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

    // opened menu
    expect(
      screen.queryByRole('button', { name: /open menu/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /close menu/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link')).not.toHaveLength(0)

    // click to close menu
    fireEvent.click(screen.getByRole('button', { name: /close menu/i }))

    // closed menu
    expect(
      screen.getByRole('button', { name: /open menu/i })
    ).toBeInTheDocument()
  })
})
