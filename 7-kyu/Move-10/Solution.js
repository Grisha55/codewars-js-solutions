function moveTen(s){
  let newStr = '';
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    
    if (char >= 'a' && char <= 'z') {
      let code = char.charCodeAt(0);
      let newCode = ((code - 97 + 10) % 26) + 97;
      newStr += String.fromCharCode(newCode);
    } else if (char >= 'A' && char <= 'Z') {
      let code = char.charCodeAt(0);
      let newCode = ((code - 65 + 10) % 26) + 65;
      newStr += String.fromCharCode(newCode);
    } else {
      newStr += char;
    }
  }
  
  return newStr;
}