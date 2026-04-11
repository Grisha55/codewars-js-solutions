function wordPattern(word) {
	const lowerWord = word.toLowerCase();
	let res = [];
	let idx = 0;
	let curStr = '';

	for (const c of lowerWord) {
		if (curStr.includes(c)) {
			const idx = lowerWord.indexOf(c);
			console.log(idx);
			res.push(res[idx]);
		} else {
			res.push(idx.toString());
			idx++;
		}
		curStr += c;
	}

	return res.join('.');
}
