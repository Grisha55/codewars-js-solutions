function last(...args) {
  
  if (args.length > 1) return args[args.length-1];
  if (args.length === 1) {
    const value = args[0];
    if (typeof value === 'string' || Array.isArray(value)) {
      return value[value.length - 1];
    }
  }
  return args[0];
}