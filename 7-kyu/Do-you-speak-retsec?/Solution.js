function reverseByCenter(s){
  let res = '';
  
  if (s.length % 2 === 0) {
    const firstPart = s.slice(0, s.length / 2);
    const secondPart = s.slice(s.length / 2);
    res += secondPart + firstPart;
  } else {
    const middle = Math.floor(s.length / 2);
    const middleChar = s[middle];
    const firstPart = s.slice(0, middle);
    const secondPart = s.slice(middle + 1);
    res += secondPart + middleChar + firstPart;
  }
  
  return res;
}