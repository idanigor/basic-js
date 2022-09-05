const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let s = 1
	let arr = []
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			s++
		} else {
      if (s === 1) s = ''
			arr.push(s + str[i])
			s = 1
		}
	}
	return arr.join('')
}

module.exports = {
	encodeLine,
}
