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
