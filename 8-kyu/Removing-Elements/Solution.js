/**
 * @function removeEveryOther
 * @param {[*]} arr
 * @returns {[*]}
 */

function removeEveryOther(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      res.push(arr[i]);
    }
  }

  return res;
}
