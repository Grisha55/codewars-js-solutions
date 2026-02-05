function htmlspecialchars(formData) {
  let res = '';
  
  for (let i = 0; i < formData.length; i++) {
    switch (formData[i]) {
        case '<':
          res += '&lt;';
          break;
        case '>':
          res += '&gt;';
          break;
        case '"':
          res += '&quot;';
          break;
        case '&':
          res += '&amp;';
          break;
        default: 
          res += formData[i];
    }
  }
  
  return res;
}