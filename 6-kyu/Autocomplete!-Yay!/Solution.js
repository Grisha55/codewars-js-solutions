function autocomplete(input, dictionary) {
  const cleanInput = input.replace(/[^a-z]/gi, '').toLowerCase();
  const result = [];

  for (const word of dictionary) {
    if (word.toLowerCase().startsWith(cleanInput)) {
      result.push(word);
      if (result.length === 5) break;
    }
  }

  return result;
}
