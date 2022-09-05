const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * new VigenereCipheringMachine().encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * new VigenereCipheringMachine().decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * new VigenereCipheringMachine(false).encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * new VigenereCipheringMachine(false).decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

//w = ((x + y) % 26) - 1
//x = ((w - y) % 26) + 1
//x: основной str
//y: ключ key
//w: шифр code
//если считать с 0-ля +1 или -1 не нужно , mod 26 оставляем

class VigenereCipheringMachine {
	constructor(value = true) {
		this.reversOff = value
		this.eN = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		]
	}
	encrypt(str, key) {
		if (str === undefined || key === undefined) {
			throw new Error('Incorrect arguments!')
		}
		let strU = str.toUpperCase()
		let keyU = key.toUpperCase()
		let newArr = []
		let t = 0
		let strUArr = strU.match(/[A-Z]/g)
		if (strUArr === null) strUArr = []
		let arrFullStr = strU.split('')
		keyU = keyU.padEnd(arrFullStr.length, keyU) // 'key'

		for (let i = 0; i < arrFullStr.length; i++) {
			outer: if (strUArr.includes(arrFullStr[i])) {
				for (let j = 0; j < this.eN.length; j++) {
					if (this.eN[j] === arrFullStr[i]) {
						for (let k = 0; k < this.eN.length; k++) {
							if (this.eN[k] === keyU[i - t]) {
								newArr.push(this.eN[(j + k) % 26])
								break outer
							}
						}
					}
				}
			} else {
				newArr.push(arrFullStr[i])
				t++
			}
		}
		if (this.reversOff) {
			return newArr.join('')
		} else {
			return newArr.reverse().join('')
		}
	}
	decrypt(code, key) {
		if (code === undefined || key === undefined) {
			throw new Error('Incorrect arguments!')
		}
		let strU = code.toUpperCase()
		let keyU = key.toUpperCase()
		let newArr = []
		let t = 0
		let strUArr = strU.match(/[A-Z]/g) // [arr]
		if (strUArr === null) strUArr = []
		let arrFullStr = strU.split('')
		keyU = keyU.padEnd(arrFullStr.length, keyU) // 'key'

		for (let i = 0; i < arrFullStr.length; i++) {
			outer: if (strUArr.includes(arrFullStr[i])) {
				for (let j = 0; j < this.eN.length; j++) {
					if (this.eN[j] === arrFullStr[i]) {
						for (let k = 0; k < this.eN.length; k++) {
							if (this.eN[k] === keyU[i - t]) {
								newArr.push(this.eN[(26 + j - k) % 26])
								break outer
							}
						}
					}
				}
			} else {
				newArr.push(arrFullStr[i])
				t++
			}
		}

		if (this.reversOff) {
			return newArr.join('')
		} else {
			return newArr.reverse().join('')
		}
	}
}



// console.log(
// 	new VigenereCipheringMachine().encrypt('122', 'b') //'AEIHQX SX DLLU!'
// )
// console.log(
// 	new VigenereCipheringMachine().decrypt('AEIHQX SX DLLU!', 'alphonse') //'ATTACK AT DAWN!'
// )
// console.log(
// 	new VigenereCipheringMachine(false).encrypt('attack at dawn!', 'alphonse') //'!ULLD XS XQHIEA'
// )
// console.log(
// 	new VigenereCipheringMachine(false).decrypt('AEIHQX SX DLLU!', 'alphonse') //'!NWAD TA KCATTA'
// )

module.exports = {
	VigenereCipheringMachine,
}
