function number2words(n) {
	if (n === 0) return 'zero';

	const words = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety'
	};

	function convert(num) {
		if (num === 0) return '';
		if (num <= 20) return words[num];
		if (num < 100) {
			const ten = Math.floor(num / 10) * 10;
			const one = num % 10;
			return words[ten] + (one ? '-' + words[one] : '');
		}
		if (num < 1000) {
			const hundred = Math.floor(num / 100);
			const remainder = num % 100;
			return (
				words[hundred] +
				' hundred' +
				(remainder ? ' ' + convert(remainder) : '')
			);
		}
	}

	const thousands = Math.floor(n / 1000);
	const hundreds = n % 1000;

	let result = '';
	if (thousands > 0) {
		result += convert(thousands) + ' thousand';
		if (hundreds > 0) result += ' ';
	}
	result += convert(hundreds);

	return result;
}
