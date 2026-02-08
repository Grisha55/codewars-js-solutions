function scale(strng, k, v) {
  if (strng === "") return "";

  const lines = strng.split("\n");
  let result = [];

  for (let i = 0; i < lines.length; i++) {
    let scaledLine = "";

    for (let j = 0; j < lines[i].length; j++) {
      for (let x = 0; x < k; x++) {
        scaledLine += lines[i][j];
      }
    }

    for (let y = 0; y < v; y++) {
      result.push(scaledLine);
    }
  }

  return result.join("\n");
}
