function sillycase(silly) {
	const n = silly.length;

	if (n % 2 === 0) {
		const f = silly.slice(0, n / 2).toLowerCase();
		const s = silly.slice(n / 2).toUpperCase();
		return f + s;
	} else {
		const f = silly.slice(0, Math.round(n / 2)).toLowerCase();
		const s = silly.slice(Math.round(n / 2)).toUpperCase();
		return f + s;
	}
}
