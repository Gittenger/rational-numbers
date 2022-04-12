// inspired by SICP book chapter 2 data abstractions

// greatest common denominator -- Euclid's algorithm
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

class Rat {
	// store num and den as object properties
	constructor(a, b) {
		const g = gcd(a, b)

		this.num = a / g
		this.den = b / g
	}

	// mult, div, etc as static methods
	static mult(x, y) {
		return new Rat(x.num * y.num, x.den * y.den)
	}

	static div(x, y) {
		return new Rat(x.num * y.den, y.num * x.den)
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
		return console.log(`${x.num}/${x.den}`)
	}
}

// instantiante new Rats
const r1 = new Rat(2, 6)
const r2 = new Rat(1, 3)

const testRat = Rat.add(r1, r2)

console.log(Rat.checkEq(r1, r2))

// use print fn to print as Rat
Rat.print(testRat)
