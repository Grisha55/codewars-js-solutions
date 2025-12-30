function maxProduct(numbers, size) {
  let mlt = 1;
  const sortedNums = [...numbers].sort((a, b) => a - b).reverse();
  for (let i = 0; i < size; i++) {
    mlt *= sortedNums[i];
  }

  return mlt;
}
