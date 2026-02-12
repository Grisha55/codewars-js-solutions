function findScreenHeight(width, ratio) {
  const sizeArr = ratio.split(':');
  let res = `${width}x`;
  let widthNum = Math.round(width / Number(sizeArr[0]) * sizeArr[1]);
  
  return res + widthNum;
}