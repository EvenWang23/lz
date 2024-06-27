/**
 * A specialized version of `forEach` for arrays.
 * If `iteratee` returns false, end the loop
 * @private
 * @param {Array} array The array to iteratee over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Array} Returns `array`
 */
export const arrayEach = <T>(array: T[], iteratee: (value: T, index: number, array: T[]) => boolean | undefined): T[] => {
    let index = -1
    const length = array.length

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break
        }
    }
    return array
}