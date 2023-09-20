//Polyfill for map
const arrStatic = [1, 2, 3, 4];

const oddEvenArr = [71, 26, 87, 98, 100, 137, 67];

const square = (value) => {
	return Math.pow(value, 2);
};

Array.prototype.calculate = function (logic) {
	let output = [];
	for (let i = 0; i < this.length; i++) {
		output.push(logic(this[i]));
	}
	return output;
};

let squareArr = arrStatic.calculate(square);
// console.log(squareArr);

//Polyfill for filetr
const isEven = (value) => {
	return value % 2 === 0 ? value : null;
};

Array.prototype.evenFilter = function (logic, context) {
	let output = [];
	for (let i = 0; i < this.length; i++) {
		if (logic.call(context, this[i], i, context)) {
			output.push(this[i]);
		}
	}
	return output;
};

let filteredArr = oddEvenArr.evenFilter(isEven);
// console.log(filteredArr);

//Polyfill for Reduce
let randomArr = [12, 45, 67, 89, 43, 56];
const initialValue = 0;

const customCallbackLogic = (acc, curr) => {
	return (acc += curr);
};

Array.prototype.customReducer = function (callback, init) {
	let acc = init || undefined;
	for (let i = 0; i < this.length; i++) {
		if (acc) {
			acc = callback.call(acc, acc, this[i], i, this);
		} else {
			acc = this[i];
		}
	}
	return acc;
};

let output = randomArr.customReducer(customCallbackLogic, initialValue);
console.log(output);
