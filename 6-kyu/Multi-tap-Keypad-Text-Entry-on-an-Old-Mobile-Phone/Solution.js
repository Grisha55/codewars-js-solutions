/**
 * @function presses
 * @param {string} phase
 * @returns {number}
 */

function presses(phase) {
  const keypad = {
    1: '1',
    2: 'ABC2',
    3: 'DEF3',
    4: 'GHI4',
    5: 'JKL5',
    6: 'MNO6',
    7: 'PQRS7',
    8: 'TUV8',
    9: 'WXYZ9',
    '*': '*',
    0: ' 0',
    '#': '#',
  };

  phase = phase.toUpperCase();
  let count = 0;

  for (let char of phase) {
    for (let key in keypad) {
      const index = keypad[key].indexOf(char);
      if (index !== -1) {
        count += index + 1;
        break;
      }
    }
  }

  return count;
}
