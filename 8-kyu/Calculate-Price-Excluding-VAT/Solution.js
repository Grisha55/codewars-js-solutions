function excludingVatPrice(price) {
	if (price === null) return -1;

	const res = price / 1.15;
	return Number(res.toFixed(2));
}