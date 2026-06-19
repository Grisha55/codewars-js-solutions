function zeroPlentiful(arr) {
	let cnt = 0;
	let res = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			cnt++;
		} else {
			if (cnt > 0 && cnt < 4) {
				return 0;
			}
			if (cnt >= 4) {
				res++;
			}
			cnt = 0;
		}
	}

	if (cnt > 0 && cnt < 4) {
		return 0;
	}
	if (cnt >= 4) {
		res++;
	}

	return res;
}
