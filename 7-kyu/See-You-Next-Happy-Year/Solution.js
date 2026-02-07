function nextHappyYear(year){
  let curYear = year + 1;
  
  while (!isUnique(curYear.toString())) {
    curYear++;  
  }
  
  return curYear;
}

function isUnique(str) {
  let seen = [];
  
  for (const char of str) {
    if (seen.includes(char)) {
      return false;
    }
    seen.push(char);
  }
  return true;
}