

class CanvasPath {
  constructor() {

  }
  foundPath() {

  }
  startPositions() {

  }
  finalPath() {

  }
}

let finalState = setInterval(final, 50, res, arr)

function final(res) {
let intervalID = setInterval(state, 50, arr)
function state(arr) {
  let node = arr.pop()

  if (arr.length === 0) {clearInterval(intervalID)}

  if (node.visited === true ) {

    let pos = node.position;
    let horizontalStart = pos[0] * xSpacing
    let verticalStart = pos[1] * ySpacing
    ctx.fillStyle = 'pink'
    ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
    ctx.strokeStyle = '2px solid black'
    ctx.strokeRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  }
  }
  let node = res.pop()

  if (res.length === 0) {clearInterval(final)}

  if (node.visited === true ) {

  let pos = node.position;
  let horizontalStart = pos[0] * xSpacing
  let verticalStart = pos[1] * ySpacing
  ctx.fillStyle = 'red'
  ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  ctx.strokeStyle = '2px solid black'
  ctx.strokeRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  }
}
