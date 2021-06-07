// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  query: {},
  asPath: '',
  route: '/',
  events: {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  }
}))
