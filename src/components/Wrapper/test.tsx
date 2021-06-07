import { render, screen } from 'utils/test-utils'

import Wrapper from '.'

describe('<Wrapper />', () => {
  it('should render the children component', () => {
    const { container } = render(
      <Wrapper>
        <div data-testid="children-component"></div>
      </Wrapper>
    )

    expect(screen.getByTestId('children-component')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
