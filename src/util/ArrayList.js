import arrays from './arrays.js'


class ArrayList {

    constructor(initialCapacity = 10) {
        this.__elementData__ = Array(initialCapacity)
        this.__size__ = 0
    }

    add(element) {
        this.__elementData__[this.__size__++] = element
    }

    size() {
        return this.__size__
    }

    isEmpty() {
        return this.__size__ === 0
    }

    insert(element, index) {
        const elementData = this.__elementData__
        arrays.arraycopy(elementData, index, elementData, index + 1, this.size() - index)
        this.__size__++
        elementData[index] = element
    }

    get(index) {
        return this.__elementData__[index]
    }

    remove(index) {
        const es = this.__elementData__
        const oldValue = es[index]
        this.#fastRemove(es, index)
        return oldValue
    }

    #fastRemove(es, i) {
        let newSize
        if ((newSize = this.__size__ - 1) > i) {
            arrays.arraycopy(es, i + 1, es, i, newSize - i)
        }
        es[this.__size__ = newSize] = null
    }
}

export default ArrayList