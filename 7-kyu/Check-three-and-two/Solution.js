function checkThreeAndTwo(array) {
	let count = {};

	for (const c of array) {
		count[c] = (count[c] || 0) + 1;
	}

	for (key in count) {
		if (count[key] !== 3 && count[key] !== 2) {
			return false;
		}
	}
  
	return true;
}