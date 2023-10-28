function countDepth(arr) {
	if (!Array.isArray(arr)) return Infinity;
	else if (arr.length === 0) return 0;
	let maxDepth = 0;
	let curDepth = 0;

	function count(array) {
		curDepth += 1;
		for (const item of array) {
			if (Array.isArray(item)) {
				count(item);
			}
		}
		if (curDepth > maxDepth) maxDepth = curDepth;
		curDepth = 1;
	}

	count(arr);
	if (arr.length > 1) maxDepth -= 1;
	return maxDepth;
}

export default class ArraySchema {
	constructor() {
		this.validDepth = 0;
	}

	maxDepth(layer = 1) {
		this.validDepth = layer;
		return this;
	}

	isValid(value) {
		const validations = [
			Array.isArray(value),
			this.validDepth > 0 ? countDepth(value) <= this.validDepth : true,
		];
		return !validations.includes(false);
	}
}

const ex0 = [];
const ex1 = [0, 0, 0, 0, [1], [1, [2]]];
const ex2 = [1, 2, 3, [0, [1, [2, [3, [4]]]]]];
const ex3 = [1, [2], [1, [2, [3, [4, [5, [6, [7, [8, [9, [10, [11]]]]]]]]]]]];
const ex4 = [[1], [[2]], [[[3]]]];
console.log(countDepth(ex0));
console.log(countDepth(ex1));
console.log(countDepth(ex2));
console.log(countDepth(ex3));
console.log(countDepth(ex4));