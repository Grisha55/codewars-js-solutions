var fibsFizzBuzz = function (n) {
	if (n === 0) return [];
	if (n === 1) return [1];

	const result = [];
	const fib = [1, 1];

	// Сначала вычисляем числа Фибоначчи
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	// Затем преобразуем в FizzBuzz
	for (let i = 0; i < n; i++) {
		const num = fib[i];
		if (num % 3 === 0 && num % 5 === 0) {
			result.push('FizzBuzz');
		} else if (num % 3 === 0) {
			result.push('Fizz');
		} else if (num % 5 === 0) {
			result.push('Buzz');
		} else {
			result.push(num);
		}
	}

	return result;
};
