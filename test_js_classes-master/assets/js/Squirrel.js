'use strict';


class Squirrel {
	constructor(name, age) {
		this.name = name; // public
		this.age = age; //pravite
	}
	set age(age) {
		if (typeof age !== "number") {
			throw new TypeError("Age must be a number");
		}
		if (!Number.isInteger(age) || age < 0 || age > 50) {
			throw new RangeError("Age must be within 0 to 50");
		}
		this._age = age;
	}
	get age() {
		return this._age;
	}
	static isSquirrel(squirrel) {
		return squirrel instanceof Squirrel;
	}
	sayHi() {
		return `hi, my name is ${this.name}`;
	}
	eat(string) {
		if (string.toLowerCase() !== "nuts") {
			throw new Error("Squirrels eat only nuts");
		}

		return `${this.name} is eating ${string}`;
	}
}
class FlyingSquirrel extends Squirrel {
	constructor(name, age, isMale) {
		super(name, age);
		this.isMale = isMale;
	}

	fly() {
		return `Squirrel with name ${this.name} is flying`;
	}
}

export {
	Squirrel,
	FlyingSquirrel,
}