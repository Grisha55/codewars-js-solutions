String.prototype.toAlternatingCase = function () {
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';

  for (let char of this) {
    if (lowerChars.includes(char)) {
      res += char.toUpperCase();
    } else if (!lowerChars.includes(char) && typeof char === 'string') {
      res += char.toLowerCase();
    } else {
      res += char;
    }
  }

  return res;
};
