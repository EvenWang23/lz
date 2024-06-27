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

export const isNumber = (value: number): boolean => {
    return typeof value === 'number' && value > -1 && value % 1 === 0 && value < Number.MAX_SAFE_INTEGER
}