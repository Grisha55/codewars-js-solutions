function deepCount(a){
  let count = a.length;
  
  for (const item of a) {
    if (Array.isArray(item)) {
      count += deepCount(item);
    }
  }

  return count;
}