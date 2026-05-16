function thirt(n) {
	const seq = [1, 10, 9, 12, 3, 4];
	let cur = n;
	let prev;

	do {
		prev = cur;
		const digits = cur.toString().split('').reverse();
		let sum = 0;

		for (let i = 0; i < digits.length; i++) {
			const seqIdx = i % seq.length;
			sum += parseInt(digits[i]) * seq[seqIdx];
		}

		cur = sum;
	} while (cur !== prev);

	return cur;
}
