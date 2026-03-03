function numObj(s){
  let res = [];
  for (const num of s) {
    let obj = {};
    obj[num] = String.fromCharCode(num);
    res.push(obj);
  }
  
  return res;
}