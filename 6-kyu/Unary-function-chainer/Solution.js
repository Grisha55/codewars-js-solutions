function chained(functions) {
  return function(input) {
    return functions.reduce((value, fn) => fn(value), input);
  };
}