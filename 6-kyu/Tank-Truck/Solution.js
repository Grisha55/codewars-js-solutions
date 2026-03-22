function tankvol(h, d, vt) {
	const r = d / 2;
	const length = vt / (Math.PI * r * r);
	const theta = 2 * Math.acos(1 - Math.min(h, d) / r);
	const segmentArea = ((r * r) / 2) * (theta - Math.sin(theta));
	const volume = segmentArea * length;
	return Math.floor(volume);
}
