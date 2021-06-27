import { render, screen } from 'utils/test-utils'

import SocialMediaLinkIcon from '.'

describe('<SocialMediaLinkIcon />', () => {
  it('should render with correct color scheme', () => {
    const { container } = render(
      <SocialMediaLinkIcon icon="github" aria-label="github link" href="/" />
    )

    const linkIcon = screen.getByRole('link', { name: /github link/i })

    expect(linkIcon).toHaveStyle({
      color: 'var(--chakra-colors-gray-300)',
      'background-color': 'transparent'
    })
    expect(linkIcon).toHaveStyleRule(
      'color',
      'var(--chakra-colors-primary-400)',
      { target: ':hover' }
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render as external link by default', () => {
    render(
      <SocialMediaLinkIcon icon="github" aria-label="github link" href="/" />
    )

    const linkIcon = screen.getByRole('link', { name: /github link/i })

    expect(linkIcon).toHaveAttribute('href', '/')
    expect(linkIcon).toHaveAttribute('target', '_blank')
    expect(linkIcon).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render not as external link when passed', () => {
    render(
      <SocialMediaLinkIcon
        icon="instagram"
        aria-label="instagram link"
        href="/instagram"
        isExternal={false}
      />
    )

    const linkIcon = screen.getByRole('link', { name: /instagram link/i })

    expect(linkIcon).toHaveAttribute('href', '/instagram')
    expect(linkIcon).not.toHaveAttribute('target', '_blank')
    expect(linkIcon).not.toHaveAttribute('rel', 'noopener noreferrer')
  })
})
