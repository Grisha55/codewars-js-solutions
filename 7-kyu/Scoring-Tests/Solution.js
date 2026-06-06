//returns the test score
function scoreTest(str, right, omit, wrong) {
	let r = 0;
	let o = 0;
	let w = 0;

	for (const b of str) {
		if (b === 0) {
			r++;
		} else if (b === 1) {
			o++;
		} else {
			w++;
		}
	}

	return r * right + o * omit - w * wrong;
}
