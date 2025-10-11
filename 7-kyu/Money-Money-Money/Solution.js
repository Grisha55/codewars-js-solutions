/**
 * @function calculateYears
 * @param {number} principal
 * @param {number} interest доход
 * @param {number} tax налог
 * @param {number} desired желаемый результат
 * @returns {number}
 */

function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let years = 0;
  let curSum = principal;

  while (curSum < desired) {
    const plus = curSum * interest;
    const value = plus * tax;
    curSum += plus - value;
    years++;
  }

  return years;
}
