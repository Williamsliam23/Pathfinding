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
  let start = grid[0][0]
  let end = grid[x-1][y-1]
  let test = new PathCanvas (can, grid);
  test.drawGrid()


  startButton.addEventListener("click", () => {
    startButton.disabled = true
    resetButton.disabled = true
    grid = null
    grid = layout(x, y)
    start = grid[0][0]
    end = grid[x-1][y-1]
    pathed.canvasPath(can, x, y, grid)
    test = null
    test = new PathCanvas (can, grid)
    pathed.canvasPath(can, x, y, grid)
    test.drawGrid
    ctx.clearRect(0, 0, 600, 600)
    pathed.colorStart(can, x, y, grid)
    pathed.canvasPath(can, x, y, grid)
    const res = path(grid, start, end, can, x, y); 
    test.drawGrid()
    pathed.colorStart(can, x, y, grid)
    setTimeout(()=> {startButton.disabled = false,
      resetButton.disabled = false}, 3000)
    
  })
  
  resetButton.addEventListener("click", () => {
    goBack()
    function goBack() {pathed.path([], x, y, can, [])
    ctx.clearRect(0, 0, 600, 600)
    test.drawGrid()}
  })



  test.drawGrid()
})
