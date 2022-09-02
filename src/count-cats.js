const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// let matrix = [
// 	['##', 'dd', '00'],
// 	['^^', '..', 'ss'],
// 	['AA', 'dd', 'Oo'],
// ]

function countCats(matrix) {
	let num = 0
	if (matrix[0]) {
		matrix.forEach((e) => {
      e.forEach(el => {
        if (el === '^^') {
          num++
        }
      });
    })
	} else {
    return 0
  }

	return num
}

// console.log(countCats(matrix))

module.exports = {
	countCats,
}
