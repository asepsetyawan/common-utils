'use strict'

/**
 * Return `value` of an array numbers.
 *
 * ```js
 * sum([1, 10, 30])
 * //=> 31
 *
 * sum(['2', '3'])
 * //=> invalid array
 * ```
 *
 * @name .sum
 * @param  {number}
 * @return {total value}
 * @api public
 */

export default function sum(array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number') {
        return 'invalid array'
      } else {
        const add = (a, b) => a + b
        return array.reduce(add)
      }
    }
  }
}
