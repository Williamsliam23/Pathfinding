import { default as PathCanvas } from "./canvas";
import { default as layout } from "./grid";
import { default as path } from "./a_star";

window.addEventListener('DOMContentLoaded', () => {
  const grid = layout(20, 20)
  const can = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  can.style.border = '2px solid red'
  const test = new PathCanvas (can, grid);
  test.drawGrid()
  console.log(path(grid))
})
