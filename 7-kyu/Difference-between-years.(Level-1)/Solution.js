var howManyYears = function (date1, date2) {
	const date1Year = +date1.split('/')[0];
	const date2Year = +date2.split('/')[0];

	return Math.abs(date1Year - date2Year);
};
