import { default as Grid } from "./grid";


class PathCanvas {
  constructor(el, grid) {
    this.el = el;
    this.x = grid.x;
    this.y = grid.y;
    this.ctx = el.getContext('2d');
  }
  numXLines () {
    let xLines = this.el.width / this.x
    return xLines
  }
  numYLines () {
    let yLines = this.el.height / this.y
    return yLines
  }
  drawGrid() {
    for (let xAxis = 0; xAxis < 601; xAxis += this.numXLines()) { // vertical lines
      this.ctx.moveTo(xAxis, 0);
      this.ctx.lineTo(xAxis, this.el.width);
      this.ctx.stroke();
    }
    for (let yAxis = 0; yAxis < 601; yAxis += this.numYLines()) { // horizontal lines
      this.ctx.moveTo(0, yAxis);
      this.ctx.lineTo(this.el.height, yAxis);
      this.ctx.stroke();
    }
    this.ctx.strokeStyle = 'black';
  }
}



export default PathCanvas
