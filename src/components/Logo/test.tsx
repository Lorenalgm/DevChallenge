import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo as heading', () => {
    render(<Logo />)

    expect(
      screen.getByRole('heading', { name: /Dev Challenge/i, level: 2 })
    ).toBeInTheDocument()
  })
})
