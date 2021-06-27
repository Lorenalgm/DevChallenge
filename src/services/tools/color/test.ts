import ColorTools from '.'

describe('ColorTools', () => {
  describe('getLevelColor()', () => {
    describe('when level is beginner', () => {
      it('should return "green.700"', () => {
        expect(ColorTools.getLevelColor('beginner')).toBe('green.700')
      })
    })

    describe('when level is intermediate', () => {
      it('should return "orange.700"', () => {
        expect(ColorTools.getLevelColor('intermediate')).toBe('orange.700')
      })
    })

    describe('when level is advanced', () => {
      it('should return "red.700"', () => {
        expect(ColorTools.getLevelColor('advanced')).toBe('red.700')
      })
    })

    describe('when level does not match any existent', () => {
      it('should return undefined', () => {
        expect(ColorTools.getLevelColor('')).toBe(undefined)
      })
    })
  })

  describe('getTypeColor()', () => {
    describe('when type is mobile', () => {
      it('should return "blue.700"', () => {
        expect(ColorTools.getTypeColor('mobile')).toBe('blue.700')
      })
    })

    describe('when type is frontend', () => {
      it('should return "pink.700"', () => {
        expect(ColorTools.getTypeColor('frontend')).toBe('pink.700')
      })
    })

    describe('when type is backend', () => {
      it('should return "purple.700"', () => {
        expect(ColorTools.getTypeColor('backend')).toBe('purple.700')
      })
    })

    describe('when type does not match any existent', () => {
      it('should return undefined', () => {
        expect(ColorTools.getTypeColor('')).toBe(undefined)
      })
    })
  })
})
