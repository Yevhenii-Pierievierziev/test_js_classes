'use strict';

import { Squirrel, FlyingSquirrel } from "./Squirrel.js";
import { User, UberAdmin, Admin } from "./User.js";

// function Squirrel(name, age) {
// 	this.name = name;
// 	this.age = age;

// 	this.sayHi = function () {
// 		return `hi, my name is ${this.name}`;
// 	}
// }
// function SquirrelAbilities() {
// 	this.sayHi = function () {
// 		return `hi, my name is ${this.name}`;
// 	}
// }
// Squirrel.prototype = new SquirrelAbilities();

const sq = new Squirrel("Squirrel", 4)
const flyingSq = new FlyingSquirrel("Max", 5, true);

const user = new User('user', 19, true);
const admin = new Admin('admin', 22, false);
const uberAdmin = new UberAdmin("uAdm", 30, true);
