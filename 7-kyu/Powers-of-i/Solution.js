function pofi(n){
  const res = n % 4;
  if (res === 0) return '1';
  if (res === 1) return 'i';
  if (res === 2) return '-1';
  return '-i';
}