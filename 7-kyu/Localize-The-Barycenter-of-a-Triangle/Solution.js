function barTriang(p1, p2, p3) {
	const x = (p1[0] + p2[0] + p3[0]) / 3;
	const y = (p1[1] + p2[1] + p3[1]) / 3;
	const xStr = Number(x.toFixed(4));
	const yStr = Number(y.toFixed(4));
	return [xStr, yStr];
}