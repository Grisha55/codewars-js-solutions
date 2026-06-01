function rot90Clock(strng) {
	const rows = strng.split('\n');
	const n = rows.length;
	const result = [];

	for (let i = 0; i < n; i++) {
		let rotated = '';
		for (let j = n - 1; j >= 0; j--) {
			rotated += rows[j][i];
		}
		result.push(rotated);
	}

	return result.join('\n');
}
function diag1Sym(strng) {
	const rows = strng.split('\n');
	const n = rows.length;
	const res = [];

	for (let i = 0; i < n; i++) {
		let diagonal = '';
		for (let j = 0; j < n; j++) {
			diagonal += rows[j][i];
		}
		res.push(diagonal);
	}

	return res.join('\n');
}
function selfieAndDiag1(strng) {
	const rows = strng.split('\n');
	const diag = diag1Sym(strng).split('\n');
	const res = [];

	for (let i = 0; i < rows.length; i++) {
		res.push(rows[i] + '|' + diag[i]);
	}

	return res.join('\n');
}
function oper(fct, s) {
	return fct(s);
}
