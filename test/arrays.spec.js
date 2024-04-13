import arrays from '../src/arrays.js'
import expect from 'expect.js'

describe('arrays', () => {
    it('getLength', () => {
        expect(arrays.getLength(null)).be(0)
        expect(arrays.getLength(void 0)).be(0)
        expect(arrays.getLength([1, 2, 3])).be(3)
    })

    it('each', () => {
        let result = 0
        arrays.each([1, 2, 3, 4], num => result += num)
        expect(result).be(10)
    })

    it('slice', () => {
        expect(arrays.slice([1, 2, 3, 4, 5, 6], 0, 3)).eql([1, 2, 3])
        expect(arrays.slice([1, 2, 3, 4, 5, 6], -1, 6)).eql([6])
    })
})