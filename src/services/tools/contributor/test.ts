import ContributorTools from '.'

describe('ContributorTools', () => {
  describe('serializeDataFromApi()', () => {
    describe('when contributor has all the data', () => {
      it('should return a formatted contributor', () => {
        const apiContributor = {
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
        }

        const formattedContributor =
          ContributorTools.serializeDataFromApi(apiContributor)

        expect(formattedContributor).toStrictEqual({
          id: '1',
          avatar: 'https://bit.ly/dan-abramov',
          name: 'Dan Abrahmov',
          position: 'Facebook developer',
          github: 'DanAbrahmov',
          linkedin: 'in/DanAbrahmov'
        })
      })
    })

    describe('when contributor does not have github user', () => {
      it('should return a formatted contributor', () => {
        const apiContributor = {
          avatar: 'https://bit.ly/dan-abramov',
          bio: 'Loading...',
          createdAt: '2020-05-18T23:46:19.420Z',
          linkedin: 'in/DanAbrahmov',
          name: 'Dan Abrahmov',
          position: 'Facebook developer',
          updatedAt: '2020-05-18T23:46:19.420Z',
          __v: 0,
          _id: '1'
        }

        const formattedContributor =
          ContributorTools.serializeDataFromApi(apiContributor)

        expect(formattedContributor).toStrictEqual({
          id: '1',
          avatar: 'https://bit.ly/dan-abramov',
          name: 'Dan Abrahmov',
          position: 'Facebook developer',
          github: '',
          linkedin: 'in/DanAbrahmov'
        })
      })
    })

    describe('when contributor does not have linkedin user', () => {
      it('should return a formatted contributor', () => {
        const apiContributor = {
          avatar: 'https://bit.ly/dan-abramov',
          bio: 'Loading...',
          createdAt: '2020-05-18T23:46:19.420Z',
          github: 'DanAbrahmov',
          name: 'Dan Abrahmov',
          position: 'Facebook developer',
          updatedAt: '2020-05-18T23:46:19.420Z',
          __v: 0,
          _id: '1'
        }

        const formattedContributor =
          ContributorTools.serializeDataFromApi(apiContributor)

        expect(formattedContributor).toStrictEqual({
          id: '1',
          avatar: 'https://bit.ly/dan-abramov',
          name: 'Dan Abrahmov',
          position: 'Facebook developer',
          github: 'DanAbrahmov',
          linkedin: ''
        })
      })
    })
  })
})
