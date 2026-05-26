function ballCollector(detritus) {
	let w = 0;

	for (const el of detritus) {
		if (el === 58) {
			w++;
		}
	}

	return { weight: w * 58 };
}
