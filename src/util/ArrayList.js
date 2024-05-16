import arrays from './arrays.js'

/**
 * Like ArrayList in Java
 */
class ArrayList {

    constructor(initialCapacity = 10) {
        this.__elementData__ = Array(initialCapacity)
        this.__size__ = 0
    }

    /**
     * Appends the specified element to the end of this list.
     * @param e element to be appended to this list
     * @return {boolean} `true` (as specified by Array[index])
     */
    add(e) {
        this.__elementData__[this.__size__++] = e
        return true
    }

    /**
     * Returns the number of elements in this list.
     * @return {number} the number of elements in this list
     */
    size() {
        return this.__size__
    }

    /**
     * Returns `true` if this list contains no elements.
     * @return {boolean} `true` if this list contains no elements
     */
    isEmpty() {
        return this.__size__ === 0
    }

    /**
     * Returns `true` if this list contains the specified element.
     * @param {Function} predicate the function invoked per iteration
     * @return {boolean} `true` if this list contains the specified element
     */
    contains(predicate) {
        return this.indexOf(predicate) >= 0
    }

    /**
     * Returns the index of the first occurrence of the specified element in this
     * list, or -1 if this list does not contain the element.
     * @param {Function} predicate the function invoked per iteration
     */
    indexOf(predicate) {
        const es = this.__elementData__
        for (let i = 0; i < es.length; i++) {
            if (predicate(es[i], i)) {
                return i
            }
        }
        return -1
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