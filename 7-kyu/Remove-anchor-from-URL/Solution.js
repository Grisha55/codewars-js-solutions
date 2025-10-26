/**
 * @function removeUrlAnchor
 * @param {string} url
 * @returns {string}
 */

function removeUrlAnchor(url) {
  let res = '';

  for (let i = 0; i < url.length; i++) {
    if (url[i] === '#') {
      return res;
    }
    res += url[i];
  }

  return res;
}
