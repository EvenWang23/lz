import arrays from './arrays.js'

class ArrayList {
    constructor() {
        this.__elementData__ = []
        this.__size__ = 0
    }

    add(element) {
        this.__elementData__.push(element)
        this.__size__++
    }

    size() {
        return this.__size__
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
        const elementData = this.__elementData__
        const s = this.size() - 1
        const oldValue = elementData[index]
        delete elementData[index]
        arrays.arraycopy(elementData, index + 1, elementData, index, s - index)
        this.__size__--
        return oldValue
    }
}

export default ArrayList