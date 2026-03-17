String.prototype.isLetter = function () {
	if (this.length !== 1) {
		return false;
	}

	const charCode = this.charCodeAt(0);

	return (
		(charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
	);
};
