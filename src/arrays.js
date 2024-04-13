/**
 *Get the length of the array.
 * @param {Array} array The array to obtain length.
 * @return {number} Returns `array.length`.
 */
function getLength(array) {
    return array == null ? 0 : array.length
}

/**
 *
 * @param {Array} array The array to iteratee over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array} Returns `array`
 */
function each(array, iteratee) {
    let index = -1,
        length = getLength(array)

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break
        }
    }
    return array
}

/**
 *
 * @param {Array} array The array to slice.
 * @param {Number} [start=0] The start position(include).
 * @param {Number} [end=array.length] The end position(exclude).
 * @return {Array} Returns the slice of `array`
 */
function slice(array, start, end) {
    let length = getLength(array),
        index = -1

    if (length === 0) {
        return Array(0)
    }

    if (start < 0) {
        start = -start > length ? 0 : length + start
    }
    end = end < length ? end : length
    if (end < 0) {
        end = length + end
    }
    start >>>= 0
    length = end > start ? (end - start >>> 0) : 0

    const result = Array(length)
    while (++index < length) {
        result[index] = array[index + start]
    }
    return result
}

export default {
    getLength,
    each,
    slice
}