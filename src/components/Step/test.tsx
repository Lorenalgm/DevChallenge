import { render, screen } from 'utils/test-utils'

import Step, { StepProps } from '.'

const props: StepProps = {
  text: 'mock text',
  icon: <div data-testid="mock icon" />
}

describe('<Step />', () => {
  it('should render correctly', () => {
    const { container } = render(<Step {...props} />)

    expect(
      screen.getByRole('heading', { name: props.text })
    ).toBeInTheDocument()

    expect(screen.getByTestId('mock icon')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
