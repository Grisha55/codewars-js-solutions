function decipherThis(str) {
  const arr = str.split(' ');
  let res = [];

  for (let s of arr) {
    const transformedStr = transform(s);
    res.push(transformedStr);
  }
  return res.join(' ');
}

function transformFirstLetter(str) {
  let charCode = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      charCode += str[i];
    } else {
      break;
    }
  }

  const fullStr = String.fromCharCode(charCode) + str.slice(charCode.length);

  return fullStr;
}

function transform(str) {
  const strCopy = transformFirstLetter(str);

  if (strCopy.length < 3) return strCopy;

  const second = strCopy[1];
  const last = strCopy[strCopy.length - 1];
  const res = strCopy[0] + last + strCopy.slice(2, strCopy.length - 1) + second;
  return res;
}
