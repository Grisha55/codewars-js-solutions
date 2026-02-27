function bigToSmall(arr){
  const res = [].concat(...arr).sort((a, b) => b - a).join('>');
  return res;
}