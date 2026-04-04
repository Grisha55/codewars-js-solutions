function simplify(poly) {
	// Parse the polynomial into monomials with coefficients
	function parseMonomials(expression) {
		const monomials = [];
		// Split by + and - while keeping the sign
		const terms = expression.match(/([=-]?[^+-]+)/g);

		for (let term of terms) {
			let coefficient = 1;
			let variables = '';

			// Extract coefficient and variables
			const match = term.match(/([+-]?\d*)([a-z]+)/);

			if (match) {
				const coeffStr = match[1];
				variables = match[2].split('').sort().join('');

				if (coeffStr === '+') coefficient = 1;
				else if (coeffStr === '-') coefficient = -1;
				else if (coeffStr === '') coefficient = 1;
				else coefficient = parseInt(coeffStr, 10);
			} else {
				// Handle case with only coefficient? Shouldn't happen for multilinear polynomials
				continue;
			}

			monomials.push({ variables, coefficient });
		}

		return monomials;
	}

	// Combine like terms
	function combineLikeTerms(monomials) {
		const combined = {};

		for (const { variables, coefficient } of monomials) {
			combined[variables] = (combined[variables] || 0) + coefficient;
		}

		// Filter out zero coefficients
		const result = [];
		for (const [variables, coefficient] of Object.entries(combined)) {
			if (coefficient !== 0) {
				result.push({ variables, coefficient });
			}
		}

		return result;
	}

	// Sort monomials according to rules
	function sortMonomials(monomials) {
		return monomials.sort((a, b) => {
			// First by number of variables (length)
			if (a.variables.length !== b.variables.length) {
				return a.variables.length - b.variables.length;
			}
			// Then lexicographically
			if (a.variables < b.variables) return -1;
			if (a.variables > b.variables) return 1;
			return 0;
		});
	}

	// Format the final expression
	function formatExpression(monomials) {
		const formatted = [];

		for (const { variables, coefficient } of monomials) {
			let coeffStr;

			if (coefficient === 1) {
				coeffStr = '+';
			} else if (coefficient === -1) {
				coeffStr = '-';
			} else if (coefficient > 0) {
				coeffStr = '+' + coefficient;
			} else {
				coeffStr = coefficient.toString();
			}

			formatted.push(coeffStr + variables);
		}

		let result = formatted.join('');

		// Remove leading '+'
		if (result.startsWith('+')) {
			result = result.substring(1);
		}

		return result;
	}

	// Main execution
	const monomials = parseMonomials(poly);
	const combined = combineLikeTerms(monomials);
	const sorted = sortMonomials(combined);
	const result = formatExpression(sorted);

	return result || '0';
}
