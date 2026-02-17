function timeCorrect(timestring) {
  // 1. null или пустая строка — вернуть как есть
  if (timestring === null || timestring === '') return timestring;

  // 2. Проверка формата HH:MM:SS
  if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring)) return null;

  let [h, m, s] = timestring.split(':').map(Number);

  // 3. Приведение секунд
  m += Math.floor(s / 60);
  s %= 60;

  // 4. Приведение минут
  h += Math.floor(m / 60);
  m %= 60;

  // 5. Приведение часов
  h %= 24;

  // 6. Форматирование с ведущими нулями
  return (
    String(h).padStart(2, '0') + ':' +
    String(m).padStart(2, '0') + ':' +
    String(s).padStart(2, '0')
  );
}
