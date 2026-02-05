function mergeArrays(a, b) {
  const allNums = [...a, ...b];
  const sortedNums = allNums.sort((a, b) => a - b);
  const uniqueSortedNums = sortedNums.filter((num, idx) => sortedNums.indexOf(num) === idx);
  return uniqueSortedNums;
}
