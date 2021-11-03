import { default as PathNode } from "./node";


class Grid {
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.creation();
  }
  creation (x, y) {
    const grid = [];
    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        if (i === 0 && j === 0) {
          row.push(new PathNode(i, j, start))
        } else if (i=== x-1 && j === y-1) {
          row.push(new PathNode(i, j, end))
        } else {
          row.push(new PathNode(i, j))
        }
      }
      grid.push(row)
    }
    this.setAdjacence(grid, x, y)
    return grid
  }


  setAdjacence (grid, x, y) {
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
  }
  printGrid() {
    let x = 5
    let y = 5
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        this.grid[i][j].printNode();
      }
    }
  }
}

export default Grid
