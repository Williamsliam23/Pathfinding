import { default as PathCanvas } from "./canvas";
import { default as Grid } from "./grid";

window.addEventListener('DOMContentLoaded', () => {
  const grid = new Grid(20, 20)
  const can = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  can.style.border = '2px solid red'
  const test = new PathCanvas (can, grid);
  test.drawGrid()
})
