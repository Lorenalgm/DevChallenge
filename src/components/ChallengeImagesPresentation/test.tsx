import { render, screen } from 'utils/test-utils'

import ChallengeImagesPresentation from '.'

import { challengeImages } from './mock'

describe('<ChallengeImagesPresentation />', () => {
  describe('when two images are provided', () => {
    beforeEach(() => {
      render(<ChallengeImagesPresentation images={challengeImages} />)
    })

    it('should render with only first imagem showing', () => {
      expect(
        screen.getByRole('img', { name: /Challenge image presentation 1/i })
      ).toBeInTheDocument()

      expect(
        screen.queryByRole('img', { name: /Challenge image presentation 2/i })
      ).not.toBeInTheDocument()
    })

    it('should render with "next" and "previous" buttons', () => {
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /previous/i })
      ).toBeInTheDocument()
    })

    it('should render with slider buttons and only the first one active', () => {
      const firstSliderButton = screen.getByRole('button', { name: /0/i })
      expect(firstSliderButton).toBeInTheDocument()
      expect(firstSliderButton).toHaveClass('awssld__bullets--active')

      const secondSliderButton = screen.getByRole('button', { name: /1/i })
      expect(secondSliderButton).toBeInTheDocument()
      expect(secondSliderButton).not.toHaveClass('awssld__bullets--active')
    })
  })
})
