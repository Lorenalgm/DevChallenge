import { render, screen } from 'utils/test-utils'

import ChallengeBrief from '.'

import includedItems from './includedItems.json'
import stepsToStart from './stepsToStart.json'

import { brief } from './mock'

describe('<ChallengeBrief />', () => {
  beforeEach(() => {
    render(<ChallengeBrief brief={brief} />)
  })

  it('should render with the brief', () => {
    expect(
      screen.getByRole('heading', { name: /Sobre o desafio/i, level: 2 })
    ).toBeInTheDocument()
    expect(screen.getByText(`Seu desafio é ${brief}`)).toBeInTheDocument()
  })

  it('should render with included items', () => {
    expect(
      screen.getByRole('heading', { name: /O que está incluso?/i, level: 3 })
    ).toBeInTheDocument()

    includedItems.forEach((includedItem) => {
      expect(screen.getByRole('listitem', { name: includedItem.text }))
    })
  })

  it('should render with steps to start', () => {
    expect(
      screen.getByRole('heading', { name: /Como iniciar?/i, level: 3 })
    ).toBeInTheDocument()

    stepsToStart.forEach((stepToStart) => {
      expect(screen.getByRole('listitem', { name: stepToStart.text }))
    })
  })
})
