function tailSwap(arr) {
  const firstArr = arr[0].split(':');
  const secondArr = arr[1].split(':');
  const res = [`${firstArr[0]}:${secondArr[1]}`, `${secondArr[0]}:${firstArr[1]}`];
  return res;
}