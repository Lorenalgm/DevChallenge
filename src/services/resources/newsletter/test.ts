import { server, rest, urls } from '../../../../.jest/mock-server'

import NewsletterResources from '.'

describe('NewsletterResources', () => {
  describe('saveEmail()', () => {
    describe('when it succeed', () => {
      it('should return empty data response', async () => {
        const email = 'user@email.com'
        const response = await NewsletterResources.saveEmail(email)

        expect(response).toStrictEqual({ data: '' })
      })
    })

    describe("when it doesn't succeed", () => {
      beforeEach(() => {
        server.use(
          rest.post(
            `${urls.devChallengeApiUrl}/newsletter`,
            (_req, res, ctx) => {
              return res(ctx.status(500))
            }
          )
        )
      })

      it('should return error attribute with error message', async () => {
        const email = 'user@email.com'
        const response = await NewsletterResources.saveEmail(email)

        expect(response).toStrictEqual({
          error: new Error('Request failed with status code 500')
        })
      })
    })
  })
})
