/**
 * @function isAnagram
 * @param {string} test
 * @param {string} original
 * @returns {boolean}
*/

var isAnagram = function(test, original) {
  const testLow = test.toLowerCase();
  const testArr = testLow.split('');
  const sortedTestArr = testArr.sort();
  const sortedTest = sortedTestArr.join('');
  
  const originalLow = original.toLowerCase();
  const originalArr = originalLow.split('');
  const sortedOriginalArr = originalArr.sort();
  const sortedOriginal = sortedOriginalArr.join('');
  return sortedTest === sortedOriginal;
};