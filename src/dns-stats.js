const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	obj = {}
	domains.forEach((e) => {
		let arr = e.split('.').reverse()

		!obj[`.${arr[0]}`] ? (obj[`.${arr[0]}`] = 1) : obj[`.${arr[0]}`]++

		!obj[`.${arr[0]}.${arr[1]}`]
			? (obj[`.${arr[0]}.${arr[1]}`] = 1)
			: obj[`.${arr[0]}.${arr[1]}`]++

		if (arr[2]) {
			!obj[`.${arr[0]}.${arr[1]}.${arr[2]}`]
				? (obj[`.${arr[0]}.${arr[1]}.${arr[2]}`] = 1)
				: obj[`.${arr[0]}.${arr[1]}.${arr[2]}`]++
		}
	})
	return obj
}

module.exports = {
	getDNSStats,
}
