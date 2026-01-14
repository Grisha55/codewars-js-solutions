function ipToInt32(ip) {
	const [a, b, c, d] = ip.split('.').map(Number);
	return a * 256 ** 3 + b * 256 ** 2 + c * 256 + d;
}
