import arrays from './arrays.js'


class ArrayList {
    #size = 0
    #elementData

    constructor(initialCapacity = 10) {
        this.#elementData = Array(initialCapacity)
    }

    add(element) {
        this.#elementData[this.#size++] = element
    }

    size() {
        return this.#size
    }

    insert(element, index) {
        const elementData = this.#elementData
        arrays.arraycopy(elementData, index, elementData, index + 1, this.size() - index)
        this.#size++
        elementData[index] = element
    }

    get(index) {
        return this.#elementData[index]
    }

    remove(index) {
        const es = this.#elementData
        const oldValue = es[index]
        this.#fastRemove(es, index)
        return oldValue
    }

    #fastRemove(es, i) {
        let newSize
        if ((newSize = this.#size - 1) > i) {
            arrays.arraycopy(es, i + 1, es, i, newSize - i)
        }
        es[this.#size = newSize] = null
    }
}

export default ArrayList