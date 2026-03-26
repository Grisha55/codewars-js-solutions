// Javascript: return multiples into an array
function multiples(s1, s2, s3) {
	const res = [];

	for (let i = Math.min(s1, s2); i < s3; i++) {
		if (i % s1 === 0 && i % s2 === 0) {
			res.push(i);
		}
	}

	return res;
}
