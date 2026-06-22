Array.prototype.all = function (p) {
	for (const num of this) {
		if (!p(num)) {
			return false;
		}
	}
	return true;
};

Array.prototype.none = function (p) {
	for (const num of this) {
		if (p(num)) {
			return false;
		}
	}
	return true;
};

Array.prototype.any = function (p) {
	for (const num of this) {
		if (p(num)) {
			return true;
		}
	}
	return false;
};
