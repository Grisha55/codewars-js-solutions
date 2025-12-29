function toFreud(string) {
  if (string === '') return '';
  let res = '';
  const stringArr = string.split(' ');
  for (let i = 0; i < stringArr.length; i++) {
    res += 'sex ';
  }

  return res.trim();
}
