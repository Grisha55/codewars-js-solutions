function isDivisible(...args){
  if (args.length < 2) return true;
  
  for (let i = 1; i < args.length; i++) {
    if (args[0] % args[i] !== 0) {
      return false;
    }
  }
  
  return true;
}