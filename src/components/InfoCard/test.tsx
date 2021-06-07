import { render, screen } from 'utils/test-utils'

import InfoCard, { InfoCardProps } from '.'

const props: InfoCardProps = {
  text: 'mock text',
  icon: <div data-testid="mock icon" />,
  href: '/mock-href'
}

describe('<InfoCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<InfoCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.text })
    ).toBeInTheDocument()
    expect(screen.getByTestId('mock icon')).toBeInTheDocument()

    const link = screen.getByRole('link', { name: props.text })
    expect(link).toHaveAttribute('href', '/mock-href')
    expect(link).not.toHaveAttribute('target', '_blank')
    expect(link).not.toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveStyleRule('transform', 'scale(1.05)', {
      target: ':hover'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with children instead of text when children exists', () => {
    const children = 'mock children'
    render(<InfoCard {...props}>{children}</InfoCard>)

    expect(screen.getByRole('link', { name: children })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: props.text })
    ).not.toBeInTheDocument()
  })

  it('should render with external link when isExternal', () => {
    render(<InfoCard {...props} isExternal />)

    const link = screen.getByRole('link', { name: props.text })
    expect(link).toHaveAttribute('href', '/mock-href')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
