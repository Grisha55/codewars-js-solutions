function validSpacing(str) {
  // пустая строка — валидна
  if (str === '') return true;

  // пробел в начале или в конце — невалидно
  if (str[0] === ' ' || str[str.length - 1] === ' ') {
    return false;
  }

  // проверка на двойные пробелы
  for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ' && str[i - 1] === ' ') {
      return false;
    }
  }

  return true;
}
