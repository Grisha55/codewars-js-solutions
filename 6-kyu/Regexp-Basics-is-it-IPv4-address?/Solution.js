String.prototype.ipv4Address = function () {
	const parts = this.split('.');

	// Должно быть ровно 4 части
	if (parts.length !== 4) return false;

	for (const part of parts) {
		// Проверяем, что часть состоит только из цифр
		if (!/^\d+$/.test(part)) return false;

		// Проверяем, что нет ведущих нулей (кроме случая "0")
		if (part.length > 1 && part[0] === '0') return false;

		// Преобразуем в число и проверяем диапазон
		const num = parseInt(part, 10);
		if (num < 0 || num > 255) return false;
	}

	return true;
};
