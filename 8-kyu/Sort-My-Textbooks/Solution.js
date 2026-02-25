function sorter(textbooks) {
  return [...textbooks].sort((a, b) => {
    const x = a.toLowerCase();
    const y = b.toLowerCase();
    
    if (x < y) {
      return -1;
    } else if(x > y) {
      return 1;
    }
    
    return 0
  });
}