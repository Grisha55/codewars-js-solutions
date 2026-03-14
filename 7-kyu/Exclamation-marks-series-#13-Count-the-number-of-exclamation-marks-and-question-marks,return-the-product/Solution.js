function product(string) {
	let excCount = 0;
	let quesCount = 0;

	for (const c of string) {
		if (c === '!') excCount++;
		if (c === '?') quesCount++;
	}

	return excCount * quesCount;
}
