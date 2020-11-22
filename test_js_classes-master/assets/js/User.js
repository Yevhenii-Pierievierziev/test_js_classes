'use strict';

//==========================class work==========================

class User {
	constructor(name, age, isMale, isBanned = false) {
		this._name = name;
		this._age = age;
		this._isMale = isMale;
		this._isBanned = isBanned;
	}
	sayHi() { }
	sendMessage(msg) {
		return `user wrote ${msg}`;
	}
}

class Admin extends User {
	constructor(name, age, isMale, isBanned = false) {
		super(name, age, isMale, isBanned)
	}
	sendMessage(msg) {
		const parentResult = super.sendMessage(msg);
		console.log(parentResult); // переопределить метод
		return `admin send ${msg}`;
	}
	banUser() { }
}

class UberAdmin extends Admin {
	constructor(name, age, isMale, isBanned = false) {
		super(name, age, isMale, isBanned)
	}
	sendMessage(msg) {
		return super.super.sendMessage(msg);
	}
}

export {
	User, UberAdmin, Admin
}