function gcdi(x, y) {
	let a = Math.abs(x);
	let b = Math.abs(y);
	while (b !== 0) {
		const temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}
function lcmu(a, b) {
	if (a === 0 || b === 0) return 0;
	return Math.abs(a * b) / gcdi(a, b);
}
function som(a, b) {
	return a + b;
}
function maxi(a, b) {
	return Math.max(a, b);
}
function mini(a, b) {
	return Math.min(a, b);
}
function operArray(fct, arr, init) {
	const result = [];
	let current = init;

	for (let i = 0; i < arr.length; i++) {
		current = fct(current, arr[i]);
		result.push(current);
	}

	return result;
}
