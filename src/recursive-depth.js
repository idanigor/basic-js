const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// class DepthCalculator {
// 	calculateDepth(arr) {
// 		let stack = []
// 		let r = 0
// 		if (arr === []) {
// 			return 1
// 		}
// 		if (Array.isArray(arr)) {
// 			;(function recurs(x) {
// 				x.forEach((e, i, a) => {
// 					if (Array.isArray(e)) {
// 						r++
// 						recurs(e)
// 						if (e === a[a.length - 1]) {
// 							stack.push(r)
// 							r = 0
// 						}
//             r = 0
// 					}
// 				})
// 			})(arr)
// 		} else {
// 			return 1
// 		}
// 		if (stack.length === 0) {
// 			return 1
// 		} else {
// 			return Math.max(...stack) + 1
// 		}
// 	}
// }

class DepthCalculator {

	calculateDepth(arr) {
		
		if (arr.filter((e) => Array.isArray(e)).length !== 0) {
				let tmpArr = arr.filter((e) => Array.isArray(e))
				let m = []
				return this.calculateDepth(m.concat(...tmpArr)) + 1
			
		} else {
			return 1
		}
	}
}

module.exports = {
	DepthCalculator,
}
