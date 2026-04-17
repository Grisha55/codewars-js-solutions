function searchNames( logins ){
  return [...logins].filter((arr) => arr[0][arr[0].length - 1] === '_');
}