function scrollingText(text){
  const res = [];
  let upperText = text.toUpperCase();
  
  for (let i = 0; i < text.length; i++) {
    res.push(upperText.slice(i) + upperText.slice(0, i));
  }
  
  return res;
}