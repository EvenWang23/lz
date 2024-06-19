const toString = Object.prototype.toString

/**
 * Gets the `toString` of `value`
 * @param {*} value The value to query
 * @returns {string} Returns the `toStringTag`
 */
function getTag(value: any): string {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(value)
}

export default getTag