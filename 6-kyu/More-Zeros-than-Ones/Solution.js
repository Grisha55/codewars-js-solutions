function moreZeros(s) {
	const arr = s.split('');
	const binaries = [...arr].map(char => char.charCodeAt(0).toString(2));
	let res = [];

	for (let i = 0; i < binaries.length; i++) {
		const zl = binaries[i].split('').filter(c => c === '0').length;
		const ol = binaries[i].split('').filter(c => c === '1').length;
		if (zl > ol && !res.includes(arr[i])) {
			res.push(arr[i]);
		}
	}

	return res;
}
