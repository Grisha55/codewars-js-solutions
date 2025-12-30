var greet = function (name) {
  const upName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return 'Hello' + ' ' + upName + '!';
};
