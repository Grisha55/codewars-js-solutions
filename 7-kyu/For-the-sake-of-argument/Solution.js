function numbers(...args) {
	for (const el of args) {
		if (typeof el !== 'number') {
			return false;
		}
	}
	return true;
}
