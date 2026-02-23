function pattern(n){
  let res = '1\n';
  
  for (let i = 1; i < n; i++) {
    let str = '';
    str += '1';
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    str += i + 1
    res += str + '\n';
  }
  
  return res.slice(0, -1);
}