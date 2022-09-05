const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = String(n).split('')
  let arr = []
  for (let i = 0; i < s.length; i++) {
    s.splice(i, 1)
    arr.push(+s.join(''))
    s = String(n).split('')
  }
  return Math.max(...arr)
  }

module.exports = {
  deleteDigit
};
