function pattern(n) {
	if (n <= 0) return '';

	let output = '';

	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			for (let j = 0; j < i; j++) {
				output += `${i}`;
			}
			output += '\n';
		}
	}

	return output.slice(0, -1);
}
