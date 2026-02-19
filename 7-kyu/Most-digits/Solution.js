function findLongest(array){
  let res = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (res.toString().length < array[i].toString().length) {
      res = array[i];
    }
  }
  
  return res;
}