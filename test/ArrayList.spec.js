import ArrayList from '../src/util/ArrayList.js'
import expect from 'expect.js'

describe('ArrayList.', () => {
    it('add', () => {
        const list = new ArrayList()
        list.add(1)
        list.add(2)
        list.add(3)
        expect(list.size()).be(3)
        expect(list.get(0)).be(1)
        expect(list.get(1)).be(2)
        expect(list.get(2)).be(3)
    })

    it('insert', () => {
        const list = new ArrayList()
        list.add(1)
        expect(list.get(0)).be(1)
        expect(list.size()).be(1)
        list.insert(-1, 0)
        expect(list.get(0)).be(-1)
        expect(list.get(1)).be(1)
        expect(list.size()).be(2)
    })


    it('remove', () => {
        const list = new ArrayList()
        list.add(1)
        list.add(2)
        list.add(3)
        expect(list.size()).be(3)
        expect(list.get(1)).be(2)
        list.remove(1)
        expect(list.get(1)).be(3)
        expect(list.size()).be(2)
    })
})