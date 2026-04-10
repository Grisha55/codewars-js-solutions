function solve(s, k) {
	if (k >= s.length) return '';

	let res = [];
	let cnt = k;

	for (let code = 97; code <= 122 && cnt > 0; code++) {
		const l = String.fromCharCode(code);
		let newRes = [];

		for (let ch of res.length ? res : s) {
			if (ch === l && cnt > 0) {
				cnt--;
			} else {
				newRes.push(ch);
			}
		}

		res = newRes;
	}

	return (res.length ? res : s.split('')).join('');
}
