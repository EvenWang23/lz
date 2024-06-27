/**
 * Gets the `toString` of `value`
 * @param {*} value The value to query
 * @returns {String} Returns the `toStringTag`
 */
export const getTag = (value: any): string => {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return Object.prototype.toString.call(value)
}

