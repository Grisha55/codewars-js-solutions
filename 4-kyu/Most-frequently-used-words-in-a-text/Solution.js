/**
 * @function topThreeWords
 * @param {string} text
 * @returns {string []}
*/

function topThreeWords(text) {
  // Создаем соварь для подсчета слов
  const wordCounts = {};
  
  // Извлекаем слова, соответствующие критериям
  const words = text.toLowerCase().match(/[a-z']+/g) || [];
  
  // Подсчитываем кол-во каждого слова
  for (const word of words) {
    // Проверяем, что слово содержит хотя бы одну букву
    if (word.match(/[a-z]/)) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  }
  
  // Преобразовываем словарь в массив [слово, кол-во] и сортируем
  const sortedWords = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  // Возвращаем топ-3 (или меньше, если слов меньше)
  return sortedWords.slice(0, 3);
}