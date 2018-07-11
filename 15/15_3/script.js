// exercise 1
console.log('1');
const first = 'Hello';
const second = 'World';

console.log(`${first} ${second}`);

// ex. 2
console.log('\n2');

const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(2, 5));

// ex. 3
console.log('\n3');

const average = (...args) => {
	let sum = 0;
	args.forEach(arg => sum += arg);
	return Math.round(sum / args.length);
}
console.log(`Average: ${average(1, 3, 6, 6)}`);

// ex. 4
console.log('\n4');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`Average of grades: ${average(...grades)}`);

// ex. 5
console.log('\n5');
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = data;
console.log(`firstname: ${firstname}, lastname: ${lastname}`);