import { default as PathCanvas } from "./canvas";

window.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementsByTagName('body')[0]
  const can = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  can.style.border = '2px solid red'
  const test = new PathCanvas (can, 10, 10) ;
  test.drawGrid()
})
