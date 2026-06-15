function dist(v, mu) {
	// suppose reaction time is 1
	const vMps = v / 3.6;
	const g = 9.81;
	const t = 1;
	const brakingDistance = (vMps * vMps) / (2 * mu * g);
	const reactionDistance = vMps * t;

	return reactionDistance + brakingDistance;
}

function speed(d, mu) {
	// suppose reaction time is 1
	const g = 9.81;
	const t = 1;
	const a = 1 / (2 * mu * g);
	const b = t;
	const c = -d;
	const D = b * b - 4 * a * c;
	const vMps = (-b + Math.sqrt(D)) / (2 * a);

	return vMps * 3.6;
}
