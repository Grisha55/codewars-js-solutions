function fuelPrice(litres, pricePerLitre) {
  // Скидка в центах
  const discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);

  // Общая цена в долларах без скидки
  const fullPrice = litres * (pricePerLitre - discount);

  return +fullPrice.toFixed(2);
}
