//preload variable: dict

var makeBackronym = function(string){
  let fullStr = '';
  
  for (const char of string) {
    fullStr += dict[char.toUpperCase()] + ' ';
  }
  
  return fullStr.trim();
};