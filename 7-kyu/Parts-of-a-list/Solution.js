function partlist(arr) {
	let res = [];
	let before = '';
	let after = '';

	for (let i = 1; i < arr.length; i++) {
		before = '';
		after = '';
		for (let j = 0; j < i; j++) {
			if (j < i - 1) {
				before += arr[j] + ' ';
			} else {
				before += arr[j];
			}
		}

		for (let k = i; k < arr.length; k++) {
			if (k < arr.length - 1) {
				after += arr[k] + ' ';
			} else {
				after += arr[k];
			}
		}

		res.push([before, after]);
	}

	return res;
}
