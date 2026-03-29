function factory(x) {
	function mult(arr) {
		const res = [];
		for (const num of arr) {
			res.push(num * x);
		}
		return res;
	}

	return mult;
}
