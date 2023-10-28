export default class ArraySchema {
	isValid(value) {
		const validations = [
			Array.isArray(value),
		];
		return !validations.includes(false);
	}
}