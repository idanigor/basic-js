const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let ind = []
	let nArr = []
	arr.forEach((e, i) => {
		if (e === -1) {
			ind.push(i)
		} else {
			nArr.push(e)
		}
	})
	nArr = nArr.sort((a, b) => a - b)
	for (let i = 0; i < ind.length; i++) {
		nArr.splice(ind[i], 0, -1)
	}

	return nArr
}

module.exports = {
	sortByHeight,
}
