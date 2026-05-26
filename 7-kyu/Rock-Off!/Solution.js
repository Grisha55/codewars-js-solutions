function solve(a, b) {
	let aCount = 0;
	let bCount = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			aCount++;
		} else if (b[i] > a[i]) {
			bCount++;
		}
	}

	const res = `${aCount}, ${bCount}: `;

	if (aCount > bCount) {
		return res + `Alice made "Kurt" proud!`;
	} else if (aCount < bCount) {
		return res + `Bob made "Jeff" proud!`;
	} else {
		return res + `that looks like a "draw"! Rock on!`;
	}
}
