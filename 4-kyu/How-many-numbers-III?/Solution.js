function findAll(sum, count) {
	// Early validation
	const minPossible = count; // first digit at least 1
	const maxPossible = count * 9;

	if (sum < minPossible || sum > maxPossible) {
		return [];
	}

	const results = [];

	function backtrack(startDigit, remainingSum, currentNumber, currentLength) {
		// Base case: we've built all digits
		if (currentLength === count) {
			if (remainingSum === 0) {
				results.push(currentNumber);
			}
			return;
		}

		const remainingPositions = count - currentLength;

		// Calculate min possible sum for remaining positions
		const minRemaining = startDigit;
		const maxRemaining = 9;

		// Prune impossible paths
		if (
			remainingSum < minRemaining ||
			remainingSum > maxRemaining * remainingPositions
		) {
			return;
		}

		// Try each possible digit for current position
		const start = startDigit;
		const end = Math.min(remainingSum, 9);

		for (let digit = start; digit <= end; digit++) {
			backtrack(
				digit,
				remainingSum - digit,
				currentNumber * 10 + digit,
				currentLength + 1
			);
		}
	}

	// Start with first digit from 1 to 9
	for (let firstDigit = 1; firstDigit <= 9; firstDigit++) {
		if (firstDigit > sum) break;
		backtrack(firstDigit, sum - firstDigit, firstDigit, 1);
	}

	if (results.length === 0) {
		return [];
	}

	results.sort((a, b) => a - b);

	// Format with leading zeros
	const minValue = results[0].toString().padStart(count, '0');
	const maxValue = results[results.length - 1].toString().padStart(count, '0');

	return [results.length, minValue, maxValue];
}
