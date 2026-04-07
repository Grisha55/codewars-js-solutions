function nthChar(words){
 let s = '';
    
 for (let i = 0; i < words.length; i++) {
   s += words[i][i];
 }
  
  return s;
}