function pattern(n){
  if (n <= 0) return '';
  let res = [];

  for (let i = 0; i < n; i++) {
    let output = '';
    for (let j = i + 1; j <= n; j++) {
      output += j.toString();
    }
    res.push(output); 
  } 
  return res.join('\n');
}