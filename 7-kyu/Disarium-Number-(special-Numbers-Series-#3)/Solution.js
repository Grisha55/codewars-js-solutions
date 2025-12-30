function disariumNumber(n) {
  let sum = 0;
  const nArr = n.toString().split('');

  for (let i = 0; i < nArr.length; i++) {
    sum += Number(nArr[i]) ** (i + 1);
  }
  return sum === n ? 'Disarium !!' : 'Not !!';
}
