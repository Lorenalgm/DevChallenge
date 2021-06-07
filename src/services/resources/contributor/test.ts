import { server, rest, urls } from '../../../../.jest/mock-server'

import ContributorResources from '.'

describe('ContributorResources', () => {
  describe('getAll()', () => {
    describe('when it succeed', () => {
      it('should return an object array with all the contributors', async () => {
        const response = await ContributorResources.getAll()

        expect(response).toStrictEqual({
          data: [
            {
              avatar: 'https://bit.ly/dan-abramov',
              bio: 'Loading...',
              createdAt: '2020-05-18T23:46:19.420Z',
              github: 'DanAbrahmov',
              linkedin: 'in/DanAbrahmov',
              name: 'Dan Abrahmov',
              position: 'Facebook developer',
              updatedAt: '2020-05-18T23:46:19.420Z',
              __v: 0,
              _id: '1'
            },
            {
              avatar: 'https://bit.ly/dan-abramov',
              bio: 'Loading...',
              createdAt: '2020-05-18T23:46:19.420Z',
              github: 'DanAbrahmov',
              linkedin: 'in/DanAbrahmov',
              name: 'Dan Abrahmov',
              position: 'Facebook developer',
              updatedAt: '2020-05-18T23:46:19.420Z',
              __v: 0,
              _id: '2'
            }
          ]
        })
      })
    })

    describe("when it doesn't succeed", () => {
      beforeEach(() => {
        server.use(
          rest.get(`${urls.devChallengeApiUrl}/devs`, (_req, res, ctx) => {
            return res(ctx.status(500))
          })
        )
      })

      it('should return error attribute with error message', async () => {
        const response = await ContributorResources.getAll()

        expect(response).toStrictEqual({
          error: new Error('Request failed with status code 500')
        })
      })
    })
  })
})
