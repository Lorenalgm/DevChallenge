import { render, screen } from 'utils/test-utils'

import CategoryCardList from '.'

describe('<CategoryCardList />', () => {
  beforeEach(() => {
    render(<CategoryCardList />)
  })

  it('should render a list with 3 category items', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('should render with front-end link', () => {
    const frontendLink = screen.getByRole('link', { name: /front-end/i })

    expect(frontendLink).toBeInTheDocument()
    expect(frontendLink).toHaveAttribute('href', 'challenges?type=frontend')
    expect(frontendLink).not.toHaveAttribute('target', '_blank')
    expect(frontendLink).not.toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render with back-end link', () => {
    const backendLink = screen.getByRole('link', { name: /back-end/i })

    expect(backendLink).toBeInTheDocument()
    expect(backendLink).toHaveAttribute('href', 'challenges?type=backend')
    expect(backendLink).not.toHaveAttribute('target', '_blank')
    expect(backendLink).not.toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render with mobile link', () => {
    const mobileLink = screen.getByRole('link', { name: /mobile/i })

    expect(mobileLink).toBeInTheDocument()
    expect(mobileLink).toHaveAttribute('href', 'challenges?type=mobile')
    expect(mobileLink).not.toHaveAttribute('target', '_blank')
    expect(mobileLink).not.toHaveAttribute('rel', 'noopener noreferrer')
  })
})
