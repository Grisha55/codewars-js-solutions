function capitalize(string, indices){
	let res = '';

	for (let i = 0; i < string.length; i++) {
		if (indices.includes(i)) {
			res += string[i].toUpperCase();
		} else {
			res += string[i]
		}
	}

	return res;
}