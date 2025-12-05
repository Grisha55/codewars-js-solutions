function mix(s1, s2) {
  const count = (s) =>
    [...s].reduce((acc, c) => {
      if (c >= 'a' && c <= 'z') acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});

  const c1 = count(s1);
  const c2 = count(s2);

  const parts = [];

  for (let code = 97; code <= 122; code++) {
    const ch = String.fromCharCode(code);
    const n1 = c1[ch] || 0;
    const n2 = c2[ch] || 0;

    if (n1 <= 1 && n2 <= 1) continue;

    if (n1 > n2) parts.push(`1:${ch.repeat(n1)}`);
    else if (n2 > n1) parts.push(`2:${ch.repeat(n2)}`);
    else parts.push(`=:${ch.repeat(n1)}`);
  }

  const cmp = (a, b) => {
    // 1) сортировка по длине (убывание)
    if (b.length !== a.length) return b.length - a.length;

    // 2) ПОСИМВОЛЬНОЕ сравнение по Unicode
    for (let i = 0; i < a.length; i++) {
      const diff = a.charCodeAt(i) - b.charCodeAt(i);
      if (diff !== 0) return diff;
    }
    return 0;
  };

  return parts.sort(cmp).join('/');
}
