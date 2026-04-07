var paintLetterboxes = function(start, end) {
  const count = {
    0 : 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  };
  
  const getArrFromNum = (num) => {
    return num.toString().split('').map(Number);
  }
  
  for (let i = start; i <= end; i++) {
    const curArr = getArrFromNum(i);
    for (const n of curArr) {
      count[n] = (count[n] || 0) + 1;
    }
  }
  
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push(count[i]);
  }
  
  return res;
}
