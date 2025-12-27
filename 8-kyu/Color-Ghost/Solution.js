let Ghost = function () {
  const colors = ['white', 'yellow', 'purple', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  this.color = colors[randomIndex];
};
