function totalBill(str) {
	const plates = str.replace(/\s/g, '').length;
	const freePlates = Math.floor(plates / 5);
	const paidPlates = plates - freePlates;

	return paidPlates * 2;
}
