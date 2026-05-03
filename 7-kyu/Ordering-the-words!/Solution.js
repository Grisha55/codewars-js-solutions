function orderWord(s) {
	if (!s || s.length === 0) return 'Invalid String!';

	return s.split('').sort().join('');
}
