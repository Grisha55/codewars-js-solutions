function findNextPower(val, pow_) {
	for (let i = 1; i < val; i++) {
		const powRes = i ** pow_;
		if (powRes > val) {
			return powRes;
		}
	}
	return -1;
}
