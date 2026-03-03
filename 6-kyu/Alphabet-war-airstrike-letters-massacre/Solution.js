function alphabetWar(fight)
{
  let field = fight.split('');
  
  for (let i = 0; i < field.length; i++) {
    if (field[i] === '*') {
      
      if (i > 0 && field[i - 1] !== '*') {
        field[i - 1] = "_";
      }
      
      if (i < field.length - 1 && field[i + 1] !== '*') {
        field[i + 1] = '_';
      } 
      
      field[i] = '_';
    }
  }
  
  const survivors = field.filter(char => char !== '_');
  
  let left = 0;
  let right = 0;
  
  const leftPower = {'w': 4, 'p': 3, 'b': 2, 's': 1};
  const rightPower = {'m': 4, 'q': 3, 'd': 2, 'z': 1};
  
  for (const char of survivors) {
    if (leftPower[char]) {
      left += leftPower[char];
    } else if (rightPower[char]) {
      right += rightPower[char];
    }
  }
  
  if (left > right) {
    return 'Left side wins!';
  } else if (right > left) {
    return 'Right side wins!';
  } else {
    return `Let's fight again!`;
  }
}