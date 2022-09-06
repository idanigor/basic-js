const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let arr = []

	for (let i = 0; i < matrix.length; i++) {
		arr.push([])
		for (let j = 0; j < matrix[0].length; j++) {
			arr[i].push(
				((i, j) => {
					let sum = 0
					if (i >= 1 && j >= 1 && matrix[i - 1][j - 1]) sum++
					if (i >= 1 && matrix[i - 1][j]) sum++
					if (i >= 1 && j != matrix[0].length - 1 && matrix[i - 1][j + 1]) sum++
					if (j >= 1 && matrix[i][j - 1]) sum++
					if (j != matrix[0].length - 1 && matrix[i][j + 1]) sum++
					if (i != matrix.length - 1 && j >= 1 && matrix[i + 1][j - 1]) sum++
					if (i != matrix.length - 1 && matrix[i + 1][j]) sum++
					if (
						i != matrix.length - 1 &&
						j != matrix[0].length - 1 &&
						matrix[i + 1][j + 1]
					)
						sum++

					return sum
				})(i, j)
			)
		}
	}
	return arr
}
module.exports = {
	minesweeper,
}
