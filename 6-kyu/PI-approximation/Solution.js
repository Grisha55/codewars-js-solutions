function iterPi(epsilon) {
	let sum = 0;
  let iterations = 0;
  let sign = 1;
  
  while (true) {
    sum += sign / (2 * iterations + 1);
    iterations++;
    sign *= -1;
    
    const approximation = 4 * sum;
    
    if (Math.abs(approximation - Math.PI) < epsilon) {
      return [
        iterations,
        Number(approximation.toFixed(10))
      ];
    }
  }
}