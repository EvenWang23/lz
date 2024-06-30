import * as _ from '../src'

describe('lang module', () => {
    describe('isSymbol function', () => {
        test('should return `true` for symbols', () => {
            if (Symbol) {
                expect(_.isSymbol(Symbol('a'))).toBe(true)
            }
        })
    })

    describe('isLength function', () => {
        test('should return `true` for lengths', () => {
        })
    })

    describe('isArrayLike function', () => {
        test('should return `true` for lengths', () => {
        })
    })
})

