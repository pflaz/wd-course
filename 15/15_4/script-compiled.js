'use strict';

// exercise 1
console.log('1');
var first = 'Hello';
var second = 'World';

console.log(first + ' ' + second);

// ex. 2
console.log('\n2');

var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply(2, 5));

// ex. 3
console.log('\n3');

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		return sum += arg;
	});
	return Math.round(sum / args.length);
};
console.log('Average: ' + average(1, 3, 6, 6));

// ex. 4
console.log('\n4');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('Average of grades: ' + average.apply(undefined, grades));

// ex. 5
console.log('\n5');
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

console.log('firstname: ' + firstname + ', lastname: ' + lastname);
