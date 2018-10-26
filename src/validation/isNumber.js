'use strict'

/**
 * determiens whether `val` is a number.
 * @name isNumber
 * @param {*} val
 * @returns {boolean}
 * @example
 * isNumber('') // => false
 * isNumber(54) // => true
 * isNumber('number') // => false
 * isNumber(64.236) // => true
 */
export default function isNumber(val) {
  return typeof val === 'number'
}
