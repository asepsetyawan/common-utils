'use strict'

export default function formatCurrency(num) {
  let newnum = num ? num.toString() : '0'
  let i = newnum.length - 3
  while (i > 0) {
    newnum = newnum.substr(0, i) + '.' + newnum.substr(i)
    i -= 3
  }
  return newnum
}
