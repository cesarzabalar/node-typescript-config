class Add {
	result: number;

	sum(n: number, n2: number): Add {
		this.result = n + n2;
		return this;
	}

	getResult(): number {
		return this.result;
	}
}

export default Add;
