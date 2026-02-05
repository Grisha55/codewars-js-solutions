function solve(arr){
  let res = [];
  let count;
  for(let i = 0; i < arr.length; i++) {
    count = 0
    for(let j = 0; j < arr[i].length; j++) {
      if (j + 1 === getAlphabetNumber(arr[i][j])) {
        count++;
      }
    }
    res.push(count);
  }
   
  return res;
};

function getAlphabetNumber(char) {
  return char.toLowerCase().charCodeAt(0) - 96;
}