function newAvg(arr, newavg) {
  const average = arr.reduce((acc, num) => acc + num, 0);
  const nextDonation = Math.ceil(newavg * (arr.length + 1) - average);
  
  if (nextDonation <= 0) {
    throw new Error('Expected New Average is too low');
  }
  
  return nextDonation;
}