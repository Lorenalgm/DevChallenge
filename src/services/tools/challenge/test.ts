import ChallengeTools from '.'

describe('ChallengeTools', () => {
  describe('serializeChallengeToPreviewFromApi()', () => {
    it('should return a formatted challenge', () => {
      const apiChallengeToPreview = {
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
      }

      const formattedChallenge =
        ChallengeTools.serializeChallengeToPreviewFromApi(apiChallengeToPreview)

      expect(formattedChallenge).toStrictEqual({
        id: '1',
        background: 'https://i.imgur.com/7FhmLIn.png',
        name: 'Marvel Heroes',
        description: 'Escolha seu personagem preferido da Marvel!',
        type: 'Mobile',
        level: 'advanced',
        techs: ['Free choice']
      })
    })
  })

  describe('serializeChallengeDetailFromApi()', () => {
    it('should return a formatted challenge', () => {
      const apiChallengeToPreview = {
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
          github: 'DanAbrahmov',
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

      const formattedChallenge = ChallengeTools.serializeChallengeDetailFromApi(
        apiChallengeToPreview
      )

      expect(formattedChallenge).toStrictEqual({
        background: 'https://i.imgur.com/7FhmLIn.png',
        name: 'Marvel Heroes',
        description: 'Escolha seu personagem preferido da Marvel!',
        brief:
          "criar um aplicativo listando os personagens da Marvel, com suas informações, habilidades e filmes! O modelo final está disponível na pasta 'design'",
        images: [
          'https://i.imgur.com/IroCUou.png',
          'https://i.imgur.com/efLHRzt.png'
        ],
        type: 'Mobile',
        level: 'advanced',
        techs: ['Free choice'],
        initialProjectUrl: 'https://github.com/Lorenalgm/marvel-heroes',
        author: {
          id: '1',
          avatar: 'https://bit.ly/dan-abramov',
          name: 'Dan Abrahmov',
          position: 'Facebook developer',
          github: 'DanAbrahmov',
          linkedin: 'in/DanAbrahmov'
        }
      })
    })
  })
})
