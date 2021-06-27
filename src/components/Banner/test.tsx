import { render, screen } from 'utils/test-utils'

import Banner from '.'

describe('<Banner />', () => {
  beforeEach(() => {
    render(<Banner />)
  })

  it('should render the heading title', () => {
    expect(
      screen.getByRole('heading', {
        name: /Melhore suas habilidades/i,
        level: 2
      })
    ).toBeInTheDocument()
  })

  it('should render the heading subtitle', () => {
    expect(
      screen.getByRole('heading', {
        name: /Com desafios de front-end, back-end e mobile/i,
        level: 3
      })
    ).toBeInTheDocument()
  })

  it('should render the button link to /challenges', () => {
    expect(
      screen.getByRole('link', {
        name: /bora codar!/i
      })
    ).toBeInTheDocument()
  })
})
