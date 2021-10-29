import { default as PathCanvas } from "./canvas";

window.addEventListener('DOMContentLoaded', () => {
  const can = document.getElementById('canvas')
  const test = new PathCanvas (can) ;
  test.draw();
})
