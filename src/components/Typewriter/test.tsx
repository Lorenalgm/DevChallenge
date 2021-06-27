import { render, screen } from 'utils/test-utils'

import Typewriter from '.'

describe('<Typewriter />', () => {
  it('should render the text passed', () => {
    const { container } = render(<Typewriter>Typewriter Example</Typewriter>)

    expect(
      screen.getByRole('heading', { name: /typewriter example/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
