import { render, screen } from 'utils/test-utils'

import HomeTemplate from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

jest.mock('components/Banner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner"></div>
    }
  }
})

jest.mock('components/CategoryCardList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CategoryCardList"></div>
    }
  }
})

jest.mock('components/Steps', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Steps"></div>
    }
  }
})

jest.mock('components/Newsletter', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Newsletter"></div>
    }
  }
})

describe('<HomeTemplate />', () => {
  beforeEach(() => {
    render(<HomeTemplate />)
  })

  it('should render wrapper on base template', () => {
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
  })

  it('should render with Banner', () => {
    expect(screen.getByTestId('Mock Banner')).toBeInTheDocument()
  })

  it('should render with CategoryCardList', () => {
    expect(screen.getByTestId('Mock CategoryCardList')).toBeInTheDocument()
  })

  it('should render with Steps', () => {
    expect(screen.getByTestId('Mock Steps')).toBeInTheDocument()
  })

  it('should render with Newsletter', () => {
    expect(screen.getByTestId('Mock Newsletter')).toBeInTheDocument()
  })
})
