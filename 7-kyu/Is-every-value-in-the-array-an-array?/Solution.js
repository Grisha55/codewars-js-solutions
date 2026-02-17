const arrCheck = value => {
  for (const el of value) {
    if (!Array.isArray(el)) {
      return false;
    }
  }
  
  return true;
}