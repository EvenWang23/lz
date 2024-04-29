import arrays from './arrays.js'

class ArrayList {
    constructor() {
        this.__elementData__ = []
    }

    add(element) {
        this.__elementData__.push(element)
    }

    size() {
        return this.__elementData__.length
    }

    insert(element, index) {
        const elementData = this.__elementData__
        arrays.arraycopy(elementData, index, elementData, index + 1, this.size() - index)
        elementData[index] = element
    }

    get(index) {
        return this.__elementData__[index]
    }
}

export default ArrayList