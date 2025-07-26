/**
 * @function domainName
 * @param {string} url
 * @returns {string}
*/

function domainName(url){
  // Удаляем протокол (http://, https://, ftp:// и т.д.)
  let domain = url.replace(/^(https?:\/\/|ftp:\/\/|www\.)/i, '');
  
  // Удаляем путь после домена
  domain = domain.split('/')[0];
  
  // Удаляем поддомены (например, www.)
  domain = domain.split('.');
  
  // Если домен начинается с www, берем следующий элемент
  if (domain[0] === 'www') {
    return domain[1]
  } 
  
  return domain[0];
}