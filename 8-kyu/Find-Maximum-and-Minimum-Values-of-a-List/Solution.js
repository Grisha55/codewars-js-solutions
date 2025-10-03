/**
 * @function min
 * @param {number[]} list
 * @returns {number}
 */

var min = function (list) {
  let res = list[0];

  for (const num of list) {
    if (res > num) {
      res = num;
    }
  }

  return res;
};

/**
 * @function max
 * @param {number[]} list
 * @returns {number}
 */

var max = function (list) {
  let res = list[0];

  for (let num of list) {
    if (res < num) {
      res = num;
    }
  }

  return res;
};
