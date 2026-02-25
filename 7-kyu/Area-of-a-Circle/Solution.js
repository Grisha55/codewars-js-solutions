function circleArea(radius) {
  if (radius <= 0) {
    throw new Error('Error');
  }
  
  const area = Math.PI * (radius ** 2);
  
  return area;
}