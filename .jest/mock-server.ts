import { rest } from 'msw'
import { setupServer } from 'msw/node'

const devChallengeApiUrl = process.env.NEXT_PUBLIC_DEV_CHALLENGE_API_URL

import challengesMocked from './fixtures/challenges.json'
import challengeMocked from './fixtures/challenge.json'
import contributorsMocked from './fixtures/contributors.json'

const server = setupServer(
  // challenges
  rest.get(`${devChallengeApiUrl}/challenges`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(challengesMocked))
  }),
  rest.get(`${devChallengeApiUrl}/challenges/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(challengeMocked))
  }),

  // contributors
  rest.get(`${devChallengeApiUrl}/devs`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contributorsMocked))
  }),

  // newsletter
  rest.post(`${devChallengeApiUrl}/newsletter`, (_req, res, ctx) => {
    return res(ctx.status(200))
  }),

  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`)
    return res(
      ctx.status(500),
      ctx.json({ error: 'You must add request handler.' })
    )
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

const urls = { devChallengeApiUrl }

export { server, rest, urls }
