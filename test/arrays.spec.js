import arrays from '../src/arrays.js'
import expect from 'expect.js'

describe('arrays', () => {
    it('getLength', () => {
        expect(arrays.getLength(null)).be(0)
        expect(arrays.getLength(void 0)).be(0)
        expect(arrays.getLength([1, 2, 3])).be(3)
    })
})