/**
 * @function nbMonth
 * @param {number} startPriceOld
 * @param {number} startPriceNew
 * @param {number} savingperMonth
 * @param {number} percentLossByMonth
 * @returns {number[]}
 */

function nbMonths(
	startPriceOld,
	startPriceNew,
	savingPerMonth,
	percentLossByMonth
) {
	let month = 0;
	let oldPrice = startPriceOld;
	let newPrice = startPriceNew;
	let bank = 0;
	let percent = percentLossByMonth;

	while (oldPrice + bank < newPrice) {
		month++;

		// каждые два месяца процент увеличивается на 0.5
		if (month % 2 === 0) percent += 0.5;

		// применяем процент потери к ценам
		oldPrice = oldPrice * (1 - percent / 100);
		newPrice = newPrice * (1 - percent / 100);

		// копим деньги
		bank += savingPerMonth;
	}

	let leftover = +(oldPrice + bank - newPrice).toFixed();
	return [month, leftover];
}
