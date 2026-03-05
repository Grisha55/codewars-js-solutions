function remove (string) {
  const arr = string.split(' ');
  if (arr.length === 1) {
    return string.slice(0, endIdx(string));
  }
  
  let res = '';
  for (const str of arr) {
    const end = endIdx(str);
    res += str.slice(0, end) + ' ';
  }
  
  return res.trim();
}

const endIdx = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== '!') {
      return i + 1;
    }  
  }
}