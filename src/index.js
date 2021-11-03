import { default as PathCanvas } from "./canvas";
import { default as layout } from "./grid";
import { default as path } from "./a_star";

window.addEventListener('DOMContentLoaded', () => {
  const grid = layout(4, 4)
  const can = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  can.style.border = '2px solid red'
  const test = new PathCanvas (can, grid);
  test.drawGrid()
  console.log(grid)
  grid[0][0].status = 'start'
  grid[3][3].status = 'end'
  let start = grid[0][0]
  let end = grid[3][3]
  console.log(path(grid, start, end))
})
