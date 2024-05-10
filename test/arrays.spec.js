import arrays from '../src/util/arrays.js'
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
        result = 0
        arrays.each([1, 2, -1, 4], num => {
            if (num < 0) return false
            result += num
        })
        expect(result).be(3)
    })

    it('slice', () => {
        expect(arrays.slice([1, 2, 3, 4, 5, 6], 0, 3)).eql([1, 2, 3])
        expect(arrays.slice([1, 2, 3, 4, 5, 6], -1, 6)).eql([6])
    })

    it('remove', () => {
        expect(arrays.remove([1, 2, 3, 4, 5, 6], 5, true)).eql([1, 2, 3, 4, 5,])
        expect(arrays.remove([1, 2, 3, 4, 5, 6], 5, false)).eql([1])
    })

    it('arraycopy', () => {
        const src = [1, 2, 3, 4, 5]
        const dest = [7, 8, 9, 10, 11]

        arrays.arraycopy(src, 0, dest, 0, dest.length)
        expect(dest).eql(src)

        arrays.arraycopy(src, 1, dest, 0, dest.length - 1)
        expect(dest).eql([2, 3, 4, 5, 5])
    })
})