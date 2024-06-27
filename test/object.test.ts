import * as _ from '../src'

describe('object module', () => {
    describe('getTag function', () => {
        test('get null tag', () => {
            expect(_.getTag(null)).toBe('[object Null]')
        })
        test('get undefined tag', () => {
            expect(_.getTag(undefined)).toBe('[object Undefined]')
        })
        test('get string tag', () => {
            expect(_.getTag('abc')).toBe('[object String]')
        })
        test('get number tag', () => {
            expect(_.getTag(13)).toBe('[object Number]')
        })
        test('get object tag', () => {
            expect(_.getTag({})).toBe('[object Object]')
        })
        test('get array tag', () => {
            expect(_.getTag([])).toBe('[object Array]')
        })
        test('get function tag', () => {
            expect(_.getTag(() => {
            })).toBe('[object Function]')
        })
        test('get symbol tag', () => {
            expect(_.getTag(Symbol.for('abc'))).toBe('[object Symbol]')
        })
    })
})
