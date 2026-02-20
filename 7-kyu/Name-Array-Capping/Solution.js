function capMe(names) {
  return names.map((name) => {
    const firstCapitalize = name[0].toUpperCase();
    const lastLower = name.slice(1).toLowerCase()
    return firstCapitalize + lastLower;
  });
}