/**
 * @function number
 * @param {number[[]]} busStops
 * @returns {number}
 */

var number = function (busStops) {
  let peopleIn = 0;
  let peopleOut = 0;

  for (const arr of busStops) {
    peopleIn += arr[0];
    peopleOut += arr[1];
  }

  return peopleIn - peopleOut;
};
