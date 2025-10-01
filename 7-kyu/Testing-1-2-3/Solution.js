var number = function (array) {
  if (array.length === 0) return [];
  let res = [];
  for (let i = 0; i < array.length; i++) {
    const str = `${i + 1}: ${array[i]}`;
    res.push(str);
  }

  return res;
};
