function buddy(start, limit) {
	// Helper function to calculate sum of proper divisors
	function sumProperDivisors(num) {
		let sum = 1; // 1 is always a proper divisor
		const sqrt = Math.sqrt(num);

		for (let i = 2; i <= sqrt; i++) {
			if (num % i === 0) {
				sum += i;
				const otherDivisor = num / i;
				if (otherDivisor !== i && otherDivisor !== num) {
					sum += otherDivisor;
				}
			}
		}

		return sum;
	}

	// For each n in range [start, limit]
	for (let n = start; n <= limit; n++) {
		const s_n = sumProperDivisors(n);
		// m must be greater than n, so m = s_n - 1
		const m = s_n - 1;

		// Check if m > n
		if (m > n) {
			const s_m = sumProperDivisors(m);

			// Check if s(m) = n + 1
			if (s_m === n + 1) {
				return [n, m];
			}
		}
	}

	return 'Nothing';
}
