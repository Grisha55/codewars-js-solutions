String.prototype.vowel = function() {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return this.length === 1 && vowels.includes(this.valueOf());
};