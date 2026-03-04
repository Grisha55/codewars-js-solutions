function sortme(names){
  return [...names].sort((a, b) => {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  })
}
