function mean(lst) {
	const nums = '0123456789';
	let sum = 0;
	let str = '';
	let cnt = 0;

	for (const c of lst) {
		if (nums.includes(c) && cnt < 10) {
			sum += +c;
			cnt++;
		} else {
			str += c;
		}
	}

	const middle = Math.round((sum / cnt) * 10) / 10;

	return [middle, str];
}
