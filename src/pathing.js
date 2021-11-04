
export function canvasPath(can, x, y, grid, res) {
  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;

  grid.forEach(row => {
  
  row.forEach(node => {
    if (node.status === 'wall') {
      let pos = node.position;
      let horizontalStart = pos[0] * xSpacing
      let verticalStart = pos[1] * ySpacing
      ctx.fillStyle = 'gray'
      ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
    }
  });
  });


  grid.forEach(row => {
  
    row.forEach(node => {
      if (node.visited === true ) {
        let pos = node.position;
        let horizontalStart = pos[0] * xSpacing
        let verticalStart = pos[1] * ySpacing
        ctx.fillStyle = 'green'
        ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
      }
    });
   });

}

export function finalPath(can, x, y, grid, res) {
  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;
  grid.forEach(row => {
  
  row.forEach(node => {
    if (res.includes(node)) {
      let pos = node.position;
      let horizontalStart = pos[0] * xSpacing
      let verticalStart = pos[1] * ySpacing
      ctx.fillStyle = 'red'
      ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
    }
  });
});
  grid.forEach(row => {
  
    row.forEach(node => {
      if (node.status === 'end') {
        let pos = node.position;
        let horizontalStart = pos[0] * xSpacing
        let verticalStart = pos[1] * ySpacing
        ctx.fillStyle = 'blue'
        ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
      } else if (node.status === 'start') {
        let pos = node.position;
        let horizontalStart = pos[0] * xSpacing
        let verticalStart = pos[1] * ySpacing
        ctx.fillStyle = 'blue'
        ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
      }
    });
   });
}