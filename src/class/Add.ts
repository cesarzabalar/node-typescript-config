class Add {
	result = 0;

	sum(n: number, n2: number): Add {
		this.result = n + n2;
		return this;
	}

	getResult() {
		return this.result;
	}
}

export default Add;
