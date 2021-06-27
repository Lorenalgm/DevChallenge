import { render, screen } from 'utils/test-utils'

import ChallengesList from '.'

import { challenges } from './mock'

describe('<ChallengesList />', () => {
  describe('with two challenges', () => {
    beforeEach(() => {
      render(<ChallengesList challenges={challenges.slice(0, 2)} />)
    })

    it('should render with the title', () => {
      expect(
        screen.getByRole('heading', { name: /Desafios/i })
      ).toBeInTheDocument()
    })

    it('should render with the challenges background image', () => {
      expect(
        screen.getAllByRole('img', {
          name: challenges[0].name
        })
      ).toHaveLength(2)
    })

    it('should render with the challenges background image', () => {
      expect(
        screen.getAllByRole('heading', {
          name: challenges[0].name,
          level: 3
        })
      ).toHaveLength(2)
    })
  })
})
