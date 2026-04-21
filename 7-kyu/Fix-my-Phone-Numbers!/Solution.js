function isItANum(str) {
	let phone = '';

	for (const c of str) {
		if (phone.length > 11) {
			return 'Not a phone number';
		}
		if (c >= '0' && c <= '9') {
			phone += c;
		}
	}

	return phone[0] === '0' && phone.length === 11 ? phone : 'Not a phone number';
}
