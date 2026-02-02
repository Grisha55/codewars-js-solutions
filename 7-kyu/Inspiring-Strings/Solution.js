function longestWord(stringOfWords) {
  const strArr = stringOfWords.split(' ');
  let maxLengthWord = strArr[0];
  
  for (let i = 1; i < strArr.length; i++) {
    if (maxLengthWord.length <= strArr[i].length) {
      maxLengthWord = strArr[i];
    }
  }
  
  return maxLengthWord;
}