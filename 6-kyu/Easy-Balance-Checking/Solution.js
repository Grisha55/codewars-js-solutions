function balance(book) {
	const clean = book.replace(/[^a-zA-Z0-9.\s]/g, '');
	const lines = clean.split('\n').filter(l => l.trim());
	let bal = parseFloat(lines[0]);
	const result = [`Original Balance: ${bal.toFixed(2)}`];
	let total = 0;

	for (let i = 1; i < lines.length; i++) {
		const parts = lines[i].trim().split(/\s+/);
		const amt = parseFloat(parts.pop());
		bal -= amt;
		total += amt;
		result.push(
			`${parts.join(' ')} ${amt.toFixed(2)} Balance ${bal.toFixed(2)}`
		);
	}

	result.push(`Total expense  ${total.toFixed(2)}`);
	result.push(`Average expense  ${(total / (lines.length - 1)).toFixed(2)}`);

	return result.join('\r\n');
}
