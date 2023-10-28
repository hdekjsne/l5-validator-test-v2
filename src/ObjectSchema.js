export default class ObjectSchema {
	constructor() {
		this.example = undefined;
	}

	shape(obj) {
		this.example = obj;
		return this;
	}

	isValid(value) {
		const validations = [
			Object.keys(value).length === Object.keys(this.example).length,
			Object.entries(value).reduce((acc, [key, value]) => {
				if (acc === false) return acc;
				return this.example[key].isValid(value);
			}, true),
		];
		return !validations.includes(false);
	}
}