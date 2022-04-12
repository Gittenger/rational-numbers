// inspired by SICP book chapter 2 data abstractions

// greatest common denominator -- Euclid's algorithm
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

class Rat {
	// store num and den as object properties
	constructor(a, b) {
		const g = gcd(a, b)

		if (b !== 0) {
			this.num = a / g
			this.den = b / g
		} else {
			throw new Error('denominator cannot be 0')
		}
	}

	// mult, div, etc as static methods
	static mult(x, y) {
		return new Rat(x.num * y.num, x.den * y.den)
	}

	static div(x, y) {
		if (y.num === 0) {
			throw new Error('cannot divide by zero')
		} else return new Rat(x.num * y.den, y.num * x.den)
	}

	static add(x, y) {
		return new Rat(x.num * y.den + y.num * x.den, x.den * y.den)
	}

	static subt(x, y) {
		return new Rat(x.num * y.den - y.num * x.den, x.den * y.den)
	}

	static checkEq(x, y) {
		return x.num * y.den === y.num * x.den
	}

	static print(x) {
		let printStr = `${x.num}/${x.den}`
		if (x.num === 0) {
			printStr = '0'
		}
		return console.log(printStr)
	}
}

// instantiante new Rats
const r1 = new Rat(0, 2)
const r2 = new Rat(1, 2)

const testRat = Rat.div(r2, r1)

console.log(Rat.checkEq(r1, r2))

// use print fn to print as Rat
Rat.print(testRat)
