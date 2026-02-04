function discoverOriginalPrice(discountedPrice, salePercentage){
  const originalPrice = discountedPrice / (1 - salePercentage / 100); 
  return Number(originalPrice.toFixed(2));
}