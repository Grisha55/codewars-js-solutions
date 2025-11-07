/**
 * @function multiplicationTable
 * @param {number} size
 * @returns {number [[]]}
 */

function multiplicationTable(size) {
  let res = [];
  let count;

  for (let i = 0; i < size; i++) {
    count = i + 1;
    let arr = [];
    for (let j = 0; j < size; j++) {
      arr.push(count);
      count += i + 1;
    }

    res.push(arr);
  }

  return res;
}
