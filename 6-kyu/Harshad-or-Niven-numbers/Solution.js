var Harshad = (function () {
	'use strict';

	function isValid(number) {
		const sum = number
			.toString()
			.split('')
			.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
		return number % sum === 0;
	}

	return {
		isValid: function (number) {
			return isValid(number);
		},

		getNext: function (number) {
			let next = number + 1;
			while (!isValid(next)) {
				next++;
			}
			return next;
		},

		getSerie: function (count, start) {
			start = start || 0;
			const result = [];
			let num = start + 1;
			while (result.length < count) {
				if (isValid(num)) {
					result.push(num);
				}
				num++;
			}
			return result;
		}
	};
})();
