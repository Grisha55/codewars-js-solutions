// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort((a, b) => sortStrs(a, b));
}

const sortStrs = (str1, str2) => {
  const len = Math.min(str1.length, str2.length);
  let isEqual = false;
  for (let i = 0; i < len; i++) {
    if (str1[i] > str2[i]) {
      return 1;
    } else if (str1[i] < str2[i]) {
      return -1;
    }
  }
  return 0;
}