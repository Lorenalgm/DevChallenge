import { render, screen } from 'utils/test-utils'

import ContributorCard from '.'

import { contributor } from './mock'

describe('<ContributorCard />', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContributorCard {...contributor} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with user avatar', () => {
    render(<ContributorCard {...contributor} />)

    expect(
      screen.getByRole('img', { name: contributor.name })
    ).toBeInTheDocument()
  })

  it('should render with user name and position', () => {
    render(<ContributorCard {...contributor} />)

    expect(
      screen.getByRole('heading', { name: contributor.name })
    ).toBeInTheDocument()
    expect(screen.getByText(contributor.position)).toBeInTheDocument()
  })

  describe('when passed github username', () => {
    it('should render with github link', () => {
      render(<ContributorCard {...contributor} github="user" />)

      const githubLink = screen.getByRole('link', {
        name: `${contributor.name} github profile`
      })

      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute('href', `https://github.com/user`)
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('when nt passed github username', () => {
    it('should not render with github link', () => {
      render(<ContributorCard {...contributor} github={undefined} />)

      expect(
        screen.queryByRole('link', {
          name: `${contributor.name} github profile`
        })
      ).not.toBeInTheDocument()
    })
  })

  describe('when passed linkedin username', () => {
    it('should render with linkedin link', () => {
      render(<ContributorCard {...contributor} linkedin="in/user" />)

      const linkedinLink = screen.getByRole('link', {
        name: `${contributor.name} linkedin profile`
      })

      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute(
        'href',
        `https://www.linkedin.com/in/user`
      )
      expect(linkedinLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('when nt passed linkedin username', () => {
    it('should not render with linkedin link', () => {
      render(<ContributorCard {...contributor} linkedin={undefined} />)

      expect(
        screen.queryByRole('link', {
          name: `${contributor.name} linkedin profile`
        })
      ).not.toBeInTheDocument()
    })
  })
})
