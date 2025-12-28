/**
 * @function mazeRunner
 * @param {number[[]]} maze
 * @param {string[]} directions
 * @returns {string}
 */

function mazeRunner(maze, directions) {
  let position = { x: 0, y: 0 };

  // Find starting position
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        position = { x: j, y: i };
        break;
      }
    }
  }

  // Move according to directions
  for (const direction of directions) {
    switch (direction) {
      case 'N':
        position.y -= 1;
        break;
      case 'S':
        position.y += 1;
        break;
      case 'E':
        position.x += 1;
        break;
      case 'W':
        position.x -= 1;
        break;
    }

    // Check boundaries and cell value
    if (
      position.y < 0 ||
      position.y >= maze.length ||
      position.x < 0 ||
      position.x >= maze[0].length ||
      maze[position.y][position.x] === 1
    ) {
      return 'Dead';
    }

    if (maze[position.y][position.x] === 3) {
      return 'Finish';
    }
  }

  return 'Lost';
}
