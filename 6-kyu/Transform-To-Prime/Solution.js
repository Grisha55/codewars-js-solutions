function minimumNumber(numbers){
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  if (isPrime(sum)) return 0;
  let closestPrime = sum + 1;
  
  while (!isPrime(closestPrime)) {
    closestPrime++;
  }
  
  return closestPrime - sum;
  
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}