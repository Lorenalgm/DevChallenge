import TechTools from '.'

describe('TechTools', () => {
  describe('serializeTechs()', () => {
    it('should return an array with correct techs', () => {
      const techs = ['HTML, CSS, Javascript, Framework opcional']

      const formattedChallenge = TechTools.serializeTechs(techs)

      expect(formattedChallenge).toStrictEqual([
        'Framework opcional',
        'Javascript',
        'CSS',
        'HTML'
      ])
    })
  })
})
