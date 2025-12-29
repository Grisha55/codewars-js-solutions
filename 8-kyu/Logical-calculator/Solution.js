function logicalCalc(array, op) {
  switch (op) {
    case 'AND':
      return array.reduce((a, b) => a && b);
    case 'OR':
      return array.reduce((a, b) => a || b);
    case 'XOR':
      return array.reduce((a, b) => a !== b);
    default:
      return null;
  }
}
