export default class StringSchema {
	constructor() {
		this.isFirstCapital = undefined;
		this.l = undefined;
		this.exclamation = undefined;
	}

	startsFromUpperCase() {
		this.isFirstCapital = true;
		return this;
	}

	length(l) {
		this.l = l;
		return this;
	}

	hasExclamation() {
		this.exclamation = true;
		return this;
	}

	isValid(value) {
		const validations = [
			typeof value === 'string',
			this.isFirstCapital !== undefined ? /^[A-Z]/.test(value) : true,
			this.l !== undefined ? value.length === this.l : true,
			this.exclamation !== undefined ? value.includes('!') : true,
		];
		return !validations.includes(false);
	}
}