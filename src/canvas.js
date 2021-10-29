
class PathCanvas {
  constructor(el) {
    this.el = el;
    this.ctx = el.getContext('2d');
  }
  draw() {

  this.ctx.fillRect(0, 0, 150, 150); // Draw a rectangle with default settings
  this.ctx.save(); // Save the default state

  this.ctx.fillStyle = '#09F'; // Make changes to the settings
  this.ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

  this.ctx.save(); // Save the current state
  this.ctx.fillStyle = '#FFF'; // Make changes to the settings
  this.ctx.globalAlpha = 0.5;
  this.ctx.fillRect(30, 30, 90, 90); // Draw a rectangle with new settings

  this.ctx.restore(); // Restore previous state
  this.ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored settings

  this.ctx.restore(); // Restore original state
  this.ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored settings
  }
}

export default PathCanvas