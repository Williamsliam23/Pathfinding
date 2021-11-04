import { default as PathNode } from "./node";


const layout = function(x, y) {
  const grid = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      if (i === 0 && j === 0) { 
          row.push(new PathNode(i, j, 'start'))
        } else if (i === 19 && j === 19) {
          row.push(new PathNode(i, j, 'end'))
        } else {
          row.push(new PathNode(i, j))
        }
      }
    grid.push(row)
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      let node = grid[i][j];
      if (i+1 < x) {
        node.addAdjacent(grid[i+1][j]) //movement east on grid
      }
      if (i-1 >= 0) {
        node.addAdjacent(grid[i-1][j]) //movement west on grid
      }
      if (j+1 < y) {
        node.addAdjacent(grid[i][j+1]) //movement south on grid
      }
      if (j-1 >= 0) {
        node.addAdjacent(grid[i][j-1]) //movement north on grid
      }
    }
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      let num1 = Math.abs ((x-1) - i)
      let num2 = Math.abs ((y-1) - j)
      grid[i][j].h = num1 + num2
    }
  }
  for (let i = 0; i < x; i++) {
    let num1 = Math.floor(Math.random() * x)
    let num2 = Math.floor(Math.random() * y)
    if (num1 + num2 === 0 ) {
      continue;
    }
    if (num1 === 20 && num2 === 10) {
      continue;
    }
    grid[num1][num2].status = 'wall'
  }
  return grid
} 



export default layout





