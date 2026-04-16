function total(arr) {
	if (arr.length === 0) return 0;

	const isPrime = num => {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	};

	let sum = 0;
	for (let i = 2; i < arr.length; i++) {
		if (isPrime(i)) {
			sum += arr[i];
		}
	}

	return sum;
}
