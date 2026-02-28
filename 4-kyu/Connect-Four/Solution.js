function whoIsWinner(piecesPositionList){
  const rows = 6;
  const cols = 7;
  const board = Array.from({ length: rows }, () => Array(cols).fill(null));
  const colIndex = c => c.charCodeAt(0) - 'A'.charCodeAt(0);
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ];
  
  function checkWin(row, col, color) {
    for (const [dr, dc] of directions) {
      let count = 1;
      let r = row + dr, c = col + dc;
      while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === color) {
        count++;
        r += dr;
        c += dc;
      }
      
      r = row - dr;
      c = col - dc;
      while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === color) {
        count++;
        r -= dr;
        c -= dc;
      }
      
      if (count >= 4) return true;
    }
    return false;
  }
  
  for (const move of piecesPositionList) {
    const [column, color] = move.split('_');
    const col = colIndex(column);
    
    for (let row = rows - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        board[row][col] = color;
        
        if (checkWin(row, col, color)) {
          return color;
        }
        break;
      }
    }
  }
  
  return 'Draw';
}