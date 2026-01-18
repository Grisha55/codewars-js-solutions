function divCon(x) {
	let sumNum = 0;
	let sumStr = 0;

	x.forEach((el) => {
		if (typeof el === 'number') {
			sumNum += el;
		} else {
			sumStr += Number(el) || 0;
		}
	});

	return sumNum - sumStr;
}