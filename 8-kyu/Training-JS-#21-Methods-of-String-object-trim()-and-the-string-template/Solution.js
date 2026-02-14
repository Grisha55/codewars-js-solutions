function fiveLine(s){
  const trimmedStr = s.trim();
  return `${trimmedStr}
${trimmedStr.repeat(2)}
${trimmedStr.repeat(3)}
${trimmedStr.repeat(4)}
${trimmedStr.repeat(5)}`
}