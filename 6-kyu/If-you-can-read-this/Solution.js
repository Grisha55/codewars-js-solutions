/**
 * @function toNato
 * @param {string} words
 * @returns {string}
 */

function toNato(words) {
  const nato = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu',
  };

  const arr = words.toLowerCase().split('');
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (nato[arr[i]]) {
      res.push(nato[arr[i]]);
    } else if (arr[i] === ' ') {
      continue;
    } else {
      res.push(arr[i]);
    }
  }

  if (res.length) {
    return res.join(' ');
  }
  return '';
}
