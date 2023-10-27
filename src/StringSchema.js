export default class StringSchema {
	constructor() {}

	isValid(value) {
		return typeof value === 'string';
	}
}