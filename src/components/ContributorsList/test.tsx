import { render, screen } from 'utils/test-utils'

import ContributorsList from '.'

import { contributors } from './mock'

describe('<ContributorsList />', () => {
  describe('when contributors list is not empty', () => {
    beforeEach(() => {
      render(<ContributorsList contributors={contributors} />)
    })

    it('should render with the heading', () => {
      expect(
        screen.getByRole('heading', {
          name: /Últimas contribuições/i,
          level: 2
        })
      ).toBeInTheDocument()
    })

    it('should render the contributors list', () => {
      // contributors avatar
      expect(
        screen.getAllByRole('img', { name: contributors[0].name })
      ).toHaveLength(contributors.length)

      // contributors name and position
      expect(
        screen.getAllByRole('heading', { name: contributors[0].name })
      ).toHaveLength(contributors.length)
      expect(screen.getAllByText(contributors[0].position)).toHaveLength(
        contributors.length
      )

      // contributors profile links
      expect(
        screen.getAllByRole('link', {
          name: `${contributors[0].name} github profile`
        })
      ).toHaveLength(contributors.length)
      expect(
        screen.getAllByRole('link', {
          name: `${contributors[0].name} linkedin profile`
        })
      ).toHaveLength(contributors.length)
    })
  })

  describe('when contributors list is empty', () => {
    it('should renders nothing', () => {
      render(<ContributorsList contributors={[]} />)

      expect(
        screen.queryByRole('heading', {
          name: /Últimas contribuições/i,
          level: 2
        })
      ).not.toBeInTheDocument()

      expect(
        screen.queryAllByRole('heading', { name: contributors[0].name })
      ).toHaveLength(0)
    })
  })
})
