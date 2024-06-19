import getTag from '../src/.internal/getTag'

describe('getTag function', () => {
    test('get null tag', () => {
        expect(getTag(null)).toBe('[object Null]')
    })

    test('get undefined tag', () => {
        expect(getTag(undefined)).toBe('[object Undefined]')
    })

    test('get string tag', () => {
        expect(getTag('abc')).toBe('[object String]')
    })

    test('get number tag', () => {
        expect(getTag(13)).toBe('[object Number]')
    })

    test('get object tag', () => {
        expect(getTag({})).toBe('[object Object]')
    })

    test('get array tag', () => {
        expect(getTag([])).toBe('[object Array]')
    })

    test('get function tag', () => {
        expect(getTag(() => {
        })).toBe('[object Function]')
    })
})