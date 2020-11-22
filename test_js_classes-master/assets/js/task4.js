class ArrayMethods {
	constructor() {
	}
	push() {
		for (let i = 0; i < arguments.length; i++) {
			this[this.length++] = arguments[i];
		}
		return this.length;
	}
	pop() {
		const lastIndex = this.length - 1;
		const lastItem = this[lastIndex];
		delete this[lastIndex];

		--this.length;

		return lastItem;
	}
	forEach(callback) {
		for (let i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		}
	}
	concat(array) {
		let result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			result.push(this[i]);
		}
		for (let i = 0; i < this.length; i++) {
			result.push(array[i]);
		}
		return result;
	}
	flat(depth = 1) {
		if (depth < 0) {
			console.error("depth must be a positive value");
			return;
		}
		let newArr = new MyArray();
		if (depth === 0) {
			return this;
		}
		for (let i = 0; i < this.length; i++) {
			if (Array.isArray(this[i])) {
				const buffer = this[i].flat(depth - 1);
				newArr = newArr.concat(buffer);
			} else if (this[i] !== undefined) {
				newArr.push(this[i]);
			}
		}
		return newArr;
	}
	shift() {
		let a = [];
		let b = [];
		for (let i = 1; i < a.length; i++) {
			b[i - 1] = a[i]
		}
		return a = b;
	}
	unshift(...args) {
		return [...this, ...args];
	}
}

class MyArray extends ArrayMethods {
	constructor() {
		this.length = 0;
	}
	array() {
		for (let i = 0; i < arguments.length; i++) {
			this[this.length] = arguments[i];
			this.length++;
		}
	}
}

//===========================================================================================

// 2) Реализовать класс RangeValidator, со следующими свойствами:
// ■  from (number);
// ■  to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
	constructor(from, to, range) {
		this._from = from;
		this._to = to;
		this._range = range;
	}
	set from(from) {
		if (typeof from !== "number") {
			throw new TypeError("Age must be a number");
		}
		this._from = from;
		return this._from;
	}
	get from() {
		return this.from;
	}
	set to(to) {
		if (typeof to !== "number") {
			throw new TypeError("Age must be a number");
		}
		this._to = to;
		return this._to;
	}
	get to() {
		return this.to;
	}
	get range() {
		let arr = [];
		for (let i = this._to; i <= this._from; i++) {
			arr.push(i);
		}
		return arr;
	}
	//метод validate
	validate(num) {
		let range = this.range;
		if (range.indexOf(num) < 0) return false;
		return true;
	}
}

let rangeTest = new RangeValidator(15, 10); //тестовый объект

console.log(rangeTest); //сам объект rangeTest
console.log(rangeTest.range); //работа геттера range
console.log(rangeTest.validate(-2)); //работа метода validate




//3. Сделайте функцию, которая определяет, есть в массиве заданный элемент или нет.

const arr = [2, 434, 345, 43, 6, 678, 67, 4546, 456, 45, 456]

function elementsFind(arr, elem) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === elem) {
			return true;
		}
	}
	return false;
}

console.log(elementsFind(arr, 6));

// 4. Дано число.Сложите его цифры.Если сумма получилась более 9 - ти, опять сложите его цифры.И так, пока сумма не станет однозначным числом(9 и менее).

function getNumber(num) {
	let summ = 0;
	num += '';
	for (let i = 0; i < num.length; i++) {
		summ += +num[i];
	}
	if (num <= 9) {
		return num;
	} else {
		return +getNumber(summ);
	}
}

// 5.  Напишите функцию, которая возвращает массив состоящий только из уникальных элементов из каждого массива

let = [2, 4, 43, 5, 657, 6, 87, 45646, 456, 2342, 1, 2,];

function unique(array) {
	return [...new Set(array)];
}