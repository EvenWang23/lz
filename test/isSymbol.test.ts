import * as _ from '../src'

describe('isSymbol function', () => {
    test('should return `true` for symbols', () => {
        if (Symbol) {
            expect(_.isSymbol(Symbol('a'))).toBe(true)
        }
    })
})