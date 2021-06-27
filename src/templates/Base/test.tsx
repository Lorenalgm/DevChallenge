import { render, screen } from 'utils/test-utils'

import BaseTemplate from '.'

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<BaseTemplate />', () => {
  it('should render the with Header and Footer', () => {
    render(
      <BaseTemplate>
        <div data-testid="Mock Children" />
      </BaseTemplate>
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

    expect(screen.getByTestId('Mock Children')).toBeInTheDocument()
  })
})
