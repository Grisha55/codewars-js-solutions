function eliminateUnsetBits(number) {
	const finalStr = number
		.split('')
		.filter(el => el !== '0')
		.join('');

	if (finalStr === '') {
		return 0;
	}

	return parseInt(finalStr, 2);
}
