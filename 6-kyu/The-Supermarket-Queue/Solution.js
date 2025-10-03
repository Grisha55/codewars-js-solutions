/**
 * @function queueTime
 * @param {number[]} customers
 * @param {number} n
 * @returns {number}
 */

function queueTime(customers, n) {
  if (customers.length === 0) return [];
  if (customers.length <= n) return Math.max(...customers);

  const tills = new Array(n).fill(0);

  for (let customerTime of customers) {
    const nextTillIndex = tills.indexOf(Math.min(...tills));
    tills[nextTillIndex] += customerTime;
  }

  return Math.max(...tills);
}
