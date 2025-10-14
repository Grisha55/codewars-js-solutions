String.prototype.isUpperCase = function () {
  for (let i = 0; i < this.length; i++) {
    const char = this[i];
    if (char >= 'a' && char <= 'z') {
      return false;
    }
  }
  return true;
};
