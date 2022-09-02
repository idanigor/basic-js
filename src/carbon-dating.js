const { NotImplementedError } = require('../extensions/index.js')

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sample string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(s) {
	if (
		s < 0 ||
		s > 15 ||
		typeof s !== 'string' ||
		!Number(s)
	) {
		return false
	} else {
		return Math.ceil(Math.log(15 / s) / (0.693 / 5730))
	}
}

module.exports = {
	dateSample,
}