function wallpaper(l, w, h) {
	const numbers = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty'
	];

	if (l === 0 || w === 0 || h === 0) {
		return numbers[0];
	}

	const area = 2 * h * (w + l);
	const totalArea = area * 1.15;
	const rollArea = 0.52 * 10;
	const rolls = Math.ceil(totalArea / rollArea);
	return numbers[rolls];
}
