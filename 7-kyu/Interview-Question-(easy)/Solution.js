function getStrings(city) {
	const count = {};
	let res = '';
	const lCity = city.toLowerCase();

	for (const char of lCity) {
		count[char] = (count[char] || 0) + 1;
	}

	for (let i = 0; i < lCity.length; i++) {
		if (!res.includes(lCity[i]) && lCity[i] !== ' ') {
			let stars = '';
			for (let j = 0; j < count[lCity[i]]; j++) {
				stars += '*';
			}

			res += lCity[i] + ':' + stars + ',';
		}
	}

	return res.slice(0, -1);
}
