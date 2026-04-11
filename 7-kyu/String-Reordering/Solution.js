function sentence(arrayOfObjects) {
    const sortedObjs = arrayOfObjects.sort((a, b) => +Object.keys(a)[0] - +Object.keys(b)[0]);
    let res = '';
  
    for (const dict of sortedObjs) {
      for (key in dict) {
        res += dict[key] + ' ';
      }
    }
  
    return res.trim();
}