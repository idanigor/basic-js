const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str)

	if (options.addition !== undefined)
		options.addition = String(options.addition)
	if (!options.repeatTimes) options.repeatTimes = 1
	if (!options.additionRepeatTimes) options.additionRepeatTimes = 1
	if (!options.separator) options.separator = '+'
	if (!options.additionSeparator) options.additionSeparator = '|'

	// 	{
	//   repeatTimes: 3,
	//   addition: '',
	//   additionRepeatTimes: 1,
	//   separator: '+',
	//   additionSeparator: '|'
	// }

	let strArr = []
	let additionArr = []

	for (let i = 0; i < options.additionRepeatTimes; i++) {
		additionArr.push(options.addition)
	}

	options.addition === ''
		? (additionArr = '')
		: (additionArr = additionArr.join(`${options.additionSeparator}`))

	str = str + additionArr

	for (let i = 0; i < options.repeatTimes; i++) {
		strArr.push(str)
	}

	return strArr.join(`${options.separator}`)
}

module.exports = {
	repeater,
}
