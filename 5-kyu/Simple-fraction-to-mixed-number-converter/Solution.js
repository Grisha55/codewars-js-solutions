function mixedFraction(s){
  // Разделяем строку на числитель и знаменатель
  let [x, y] = s.split('/').map(Number);
  
  // Проверка деления на ноль
  if (y === 0) {
    throw new Error('Zero division error');
  }
  
  // Если числитель равен 0, возвращаем "0"
  if (x === 0) {
    return "0";
  }
  
  // Запоминаем знак и работаем с абсолютными значениями
  const sign = (x < 0) ^ (y < 0) ? '-' : '';
  let numerator = Math.abs(x);
  let denominator = Math.abs(y);
  
  // Целая часть
  const integer = Math.floor(numerator / denominator);
  let remainder = numerator % denominator;
  
  // Если нет остатка, возвращаем только целую часть со знаком
  if (remainder === 0) {
    return sign + integer;
  }
  
  // Сокращаем дробную часть (находим НОД)
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(remainder, denominator);
  remainder /= divisor;
  denominator /= divisor;
  
  // Формируем результат
  if (integer === 0) {
    // Если целая часть равна 0, возвращаем только дробь
    return sign + remainder + '/' + denominator;
  } else {
    // Иначе возвращаем смешанную дробь
    return sign + integer + ' ' + remainder + '/' + denominator;
  }
}