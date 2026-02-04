function numPrimorial(n) {
  let primorialNumber = 1;
  let currentNumber = 2;
  let primesFound = 0;
  
  while (primesFound < n) {
    if (isPrime(currentNumber)) {
      primorialNumber *= currentNumber;
      primesFound++;
    }
    currentNumber++;
  }
  
  return primorialNumber;
}

function isPrime(num) {
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}