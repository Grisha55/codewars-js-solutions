function rotate(str){
  if (str.length === 0) return [];
  
  let res = [];
  let s = str;
  for (let i = 0; i < str.length; i++) {
    s = s.slice(1) + s.slice(0, 1);
    res.push(s);
  }
  
  return res;
}