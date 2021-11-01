import { default as PathNode } from "./node";

class PathCanvas {
  constructor(el, x, y) {
    this.el = el;
    this.ctx = el.getContext('2d');
    this.grid = this.createGrid(x, y);
  }
  createGrid (x, y) {
    const grid = [];
    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(new PathNode(i, j))
      }
      grid.push(row)
    }
    this.setAdjacence(grid, x, y)
    return grid
  }

  drawGrid() {
    for (let xAxis = 0; xAxis < 601; xAxis += 30) {
      this.ctx.moveTo(xAxis, 0);
      this.ctx.lineTo(xAxis, 600);
      this.ctx.stroke();
    }
    for (let yAxis = 0; yAxis < 601; yAxis += 30) {
      this.ctx.moveTo(0, yAxis);
      this.ctx.lineTo(600, yAxis);
      this.ctx.stroke();
    }
    this.ctx.strokeStyle = black;
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

export default PathCanvas
