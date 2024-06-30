import {getTag} from './object'

/**
 * Check if `value` is classified as a `Symbol` primitive or object.
 * @param {*} value The value to check
 * @returns {boolean}  Returns `true` if `value` is a Symbol, else `false`
 */
export const isSymbol = (value: any): boolean => {
    const type = typeof value
    return (
        type === 'symbol' ||
        (type === 'object' && value != null && getTag(value) === '[object Symbol]')
    )
}

/**
 * Checks if `value` is a valid array-like length that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`
 *
 * @param value The value to check
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MAX_VALUE)
 * // => false
 *
 * isLength(Number.MAX_SAFE_INTEGER)
 * // => true
 *
 * isLength('3')
 * // => false
 */
export const isLength = (value: any): boolean => {
    return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER
}

/**
 *Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`
 *
 * @example

 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 *
 */
export const isArrayLike = (value: any): boolean => {
    return value != null && typeof value !== 'function' && isLength(value.length)
}
