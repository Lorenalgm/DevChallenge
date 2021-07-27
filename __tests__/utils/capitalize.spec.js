import capitalize from '../../src/utils/capitalize';

describe(capitalize, () => {
    it('should ignore falsy-string', () => {
        expect(capitalize(undefined)).toBeUndefined();
        expect(capitalize(null)).toBeUndefined();
    });

    it('should capitalize the string', () => {
        expect(capitalize('string')).toBe('String');
        expect(capitalize('STring')).toBe('STring');
        expect(capitalize('spaced string')).toBe('Spaced string');
    });
});
