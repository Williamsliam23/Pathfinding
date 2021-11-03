import { default as PathNode } from "./node";

const layout = function(x, y) {
  const grid = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      if (i === 0 && j === 0) {
        row.push(new PathNode(i, j, 'start'))
      } else if (i=== x-1 && j === y-1) {
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
  return grid
} 











// class Grid {
//   constructor (x, y) {
//     this.x = x;
//     this.y = y;
//     this.creation(this.x, this.y);
//   }
//   creation (x, y) {
//     const grid = [];
//     for (let i = 0; i < x; i++) {
//       const row = [];
//       for (let j = 0; j < y; j++) {
//         if (i === 0 && j === 0) {
//           row.push(new PathNode(i, j, 'start'))
//         } else if (i=== x-1 && j === y-1) {
//           row.push(new PathNode(i, j, 'end'))
//         } else {
//           row.push(new PathNode(i, j))
//         }
//       }
//       grid.push(row)
//     }
//     this.setAdjacence(grid, this.x, this.y)
//     return grid
//   }

//   setAdjacence (grid) {
//     for (let i = 0; i < this.x; i++) {
//       for (let j = 0; j < this.y; j++) {
//         let node = grid[i][j];
//         if (i+1 < this.x) {
//           node.addAdjacent(grid[i+1][j]) //movement east on grid
//         }
//         if (i-1 >= 0) {
//           node.addAdjacent(grid[i-1][j]) //movement west on grid
//         }
//         if (j+1 < this.y) {
//           node.addAdjacent(grid[i][j+1]) //movement south on grid
//         }
//         if (j-1 >= 0) {
//           node.addAdjacent(grid[i][j-1]) //movement north on grid
//         }
//       }
//     }
//   }
// }

export default layout
