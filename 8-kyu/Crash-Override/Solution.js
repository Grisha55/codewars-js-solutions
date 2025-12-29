function aliasGen(first, last) {
  const firstLetter = first[0].toUpperCase();
  const secondLetter = last[0].toUpperCase();
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  if (
    !chars.includes(firstLetter.toLowerCase()) ||
    !chars.includes(secondLetter.toLowerCase())
  ) {
    return 'Your name must start with a letter from A - Z.';
  }

  return `${firstName[firstLetter]} ${surname[secondLetter]}`;
}
