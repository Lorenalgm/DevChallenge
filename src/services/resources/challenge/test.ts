import { server, rest, urls } from '../../../../.jest/mock-server'

import ChallengeResources from '.'

describe('ChallengeResources', () => {
  describe('getAll()', () => {
    describe('when it succeed', () => {
      it('should return an object array with all the challenges', async () => {
        const response = await ChallengeResources.getAll()

        expect(response).toStrictEqual({
          data: [
            {
              background: 'https://i.imgur.com/7FhmLIn.png',
              brief:
                "criar um aplicativo listando os personagens da Marvel, com suas informações, habilidades e filmes! O modelo final está disponível na pasta 'design'",
              createdAt: '2020-06-05T21:57:46.607Z',
              description: 'Escolha seu personagem preferido da Marvel!',
              dev_id: '1',
              github_url: 'https://github.com/Lorenalgm/marvel-heroes',
              images: [
                'https://i.imgur.com/IroCUou.png',
                'https://i.imgur.com/efLHRzt.png'
              ],
              level: 'advanced',
              name: 'Marvel Heroes',
              techs: ['Free choice'],
              type: 'Mobile',
              updatedAt: '2020-06-05T21:57:46.607Z',
              __v: 0,
              _id: '1'
            },
            {
              background: 'https://i.imgur.com/7FhmLIn.png',
              brief:
                "criar um aplicativo listando os personagens da Marvel, com suas informações, habilidades e filmes! O modelo final está disponível na pasta 'design'",
              createdAt: '2020-06-05T21:57:46.607Z',
              description: 'Escolha seu personagem preferido da Marvel!',
              dev_id: '1',
              github_url: 'https://github.com/Lorenalgm/marvel-heroes',
              images: [
                'https://i.imgur.com/IroCUou.png',
                'https://i.imgur.com/efLHRzt.png'
              ],
              level: 'advanced',
              name: 'Marvel Heroes',
              techs: ['Free choice'],
              type: 'Mobile',
              updatedAt: '2020-06-05T21:57:46.607Z',
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
          rest.get(
            `${urls.devChallengeApiUrl}/challenges`,
            (_req, res, ctx) => {
              return res(ctx.status(500))
            }
          )
        )
      })

      it('should return error attribute with error message', async () => {
        const response = await ChallengeResources.getAll()

        expect(response).toStrictEqual({
          error: new Error('Request failed with status code 500')
        })
      })
    })
  })

  describe('getById()', () => {
    describe('when it succeed', () => {
      it('should return an object array with all the challenges', async () => {
        const response = await ChallengeResources.getById('1')

        expect(response).toStrictEqual({
          data: {
            background: 'https://i.imgur.com/7FhmLIn.png',
            brief:
              "criar um aplicativo listando os personagens da Marvel, com suas informações, habilidades e filmes! O modelo final está disponível na pasta 'design'",
            createdAt: '2020-06-05T21:57:46.607Z',
            description: 'Escolha seu personagem preferido da Marvel!',
            dev_id: {
              avatar: 'https://bit.ly/dan-abramov',
              bio: 'Loading...',
              createdAt: '2020-06-05T21:52:04.232Z',
              linkedin: 'in/DanAbrahmov',
              name: 'Dan Abrahmov',
              position: 'Facebook developer',
              updatedAt: '2020-06-05T21:52:04.232Z',
              __v: 0,
              _id: '1'
            },
            github_url: 'https://github.com/Lorenalgm/marvel-heroes',
            images: [
              'https://i.imgur.com/IroCUou.png',
              'https://i.imgur.com/efLHRzt.png'
            ],
            level: 'advanced',
            name: 'Marvel Heroes',
            techs: ['Free choice'],
            type: 'Mobile',
            updatedAt: '2020-06-05T21:57:46.607Z',
            __v: 0,
            _id: '1'
          }
        })
      })
    })

    describe("when it doesn't succeed", () => {
      beforeEach(() => {
        server.use(
          rest.get(
            `${urls.devChallengeApiUrl}/challenges/:id`,
            (_req, res, ctx) => {
              return res(ctx.status(500))
            }
          )
        )
      })

      it('should return error attribute with error message', async () => {
        const response = await ChallengeResources.getById('1')

        expect(response).toStrictEqual({
          error: new Error('Request failed with status code 500')
        })
      })
    })
  })
})
