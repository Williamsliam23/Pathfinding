import { default as PathCanvas } from "./canvas";

window.addEventListener('DOMContentLoaded', () => {
  const can = document.getElementById('canvas')
  can.style.border = '2px solid black'
  const test = new PathCanvas (can) ;
  test.draw();
})
