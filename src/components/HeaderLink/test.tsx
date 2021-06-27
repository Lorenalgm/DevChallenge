import { render, screen } from 'utils/test-utils'
import { List } from '@chakra-ui/react'

import HeaderLink from '.'

describe('<HeaderLink />', () => {
  it('should render active link', () => {
    const { container } = render(
      <List>
        <HeaderLink active href="/">
          my link
        </HeaderLink>
      </List>
    )

    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'href',
      '/'
    )

    expect(container.firstChild?.firstChild).toMatchSnapshot()
  })

  it('should render not active link', () => {
    render(
      <List>
        <HeaderLink active={false} href="/my-link">
          link
        </HeaderLink>
      </List>
    )

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/my-link'
    )
  })
})
