import { default as PathCanvas } from "./canvas";
import { default as layout } from "./grid";
import { default as path } from "./a_star";
import  * as pathed from './pathing';

window.addEventListener('DOMContentLoaded', () => {
  const x = 20;
  const y = 20;
  const can = document.getElementById('canvas')
  can.style.border = '2px solid black'
  const ctx = canvas.getContext('2d')
  const resetButton = document.getElementById('reset')
  const startButton = document.getElementById('begin')
  let grid;
  grid = layout(x, y)
  let test = new PathCanvas (can, grid);
  let start = grid[0][0]
  let end = grid[x-1][y-1]
  // function init() {
  //   grid = layout(x,y);
  //   start = grid[0][0]
  //   end = grid[19][19]
  //   test = new PathCanvas(can, grid)
  //   test.drawGrid()
  // }
// window.addEventListener('DOMContentLoaded', () => {
  // init();
  // resetButton.addEventListener("click", ()=> {
  //   ctx.clearRect(0,0,el.height,el.width)
  //   grid = layout(x,y)
  // })
  
  startButton.addEventListener("click", () => {
    document.location.reload(true)
  })
  const res = path(grid, start, end);


  pathed.canvasPath(can, x, y, grid, res);
  pathed.finalPath(can, x, y, grid, res)

  test.drawGrid()
})
