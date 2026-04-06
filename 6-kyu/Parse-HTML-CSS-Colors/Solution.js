function parseHTMLColor(color) {
  // Функция преобразования HEX в RGB
  function hexToRgb(hex) {
    // Убираем #
    hex = hex.replace(/^#/, '');
    
    // Если 3-значный HEX (#RGB) -> превращаем в 6-значный
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    
    // Парсим 6-значный HEX (#RRGGBB)
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  }
  
  // Если цвет начинается с # - это HEX
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }
  
  // Иначе - это имя цвета (приводим к нижнему регистру и ищем в PRESET_COLORS)
  const presetHex = PRESET_COLORS[color.toLowerCase()];
  
  // Если нашли в словаре - преобразуем HEX в RGB
  if (presetHex) {
    return hexToRgb(presetHex);
  }
  
  // Если ничего не подошло (на всякий случай)
  return { r: 0, g: 0, b: 0 };
}