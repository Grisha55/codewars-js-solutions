function createDict(keys, values){
  const res = {};
  
  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      res[keys[i]] = null;
    } else { 
      res[keys[i]] = values[i];  
    }
  }
  
  return res;
}