function flickSwitch(arr) {
	let res = [];
	let state = true;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'flick') {
			state = !state;
		}
		res.push(state);
	}

	return res;
}