
export function canvasPath(can, x, y, grid) {
  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;
  console.log('check')

  grid.forEach(row => {
  
  row.forEach(node => {
    console.log(node.status)
    if (node.status === 'wall') {
      console.log(node.position)
      let pos = node.position;
      let horizontalStart = pos[0] * xSpacing
      let verticalStart = pos[1] * ySpacing
      ctx.fillStyle = 'gray'
      ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
    }
  });
  });

}

export function path(arr, x, y, can, results) {

  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;

  let finalState = setInterval(final, 50, results, arr)

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
    if (node.status === 'end') {
      let pos = node.position;
      let horizontalStart = pos[0] * xSpacing
      let verticalStart = pos[1] * ySpacing
      ctx.fillStyle = 'blue'
      ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)}
  }
  }
  if (arr.length === 0) {
  let node = res.pop()

  if (res.length === 0) {clearInterval(finalState)}

  if (node.visited === true ) {

  let pos = node.position;
  let horizontalStart = pos[0] * xSpacing
  let verticalStart = pos[1] * ySpacing
  ctx.fillStyle = 'red'
  ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  ctx.strokeStyle = '2px solid black'
  ctx.strokeRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  if (node.status === 'end') {
    let pos = node.position;
    let horizontalStart = pos[0] * xSpacing
    let verticalStart = pos[1] * ySpacing
    ctx.fillStyle = 'blue'
    ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)}
  }
}
}
  
  // var intervalID = setInterval(state, 50, arr)

  // function state(arr) {
  //   let node = arr.pop()

  //   if (arr.length === 0) {clearInterval(intervalID)}

  //   if (node.visited === true ) {

  //     let pos = node.position;
  //     let horizontalStart = pos[0] * xSpacing
  //     let verticalStart = pos[1] * ySpacing
  //     ctx.fillStyle = 'pink'
  //     ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //     ctx.strokeStyle = '2px solid black'
  //     ctx.strokeRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //   }
  // }
  // var final = setInterval(finalState, 50, results);

  // function finalState(arr) {
  //   let node = arr.pop()

  //   if (arr.length === 0) {clearInterval(final)}

  //   if (node.visited === true ) {

  //     let pos = node.position;
  //     let horizontalStart = pos[0] * xSpacing
  //     let verticalStart = pos[1] * ySpacing
  //     ctx.fillStyle = 'red'
  //     ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //     ctx.strokeStyle = '2px solid black'
  //     ctx.strokeRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //   }
  // }
}

export function colorStart(can, x, y, grid) {
  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;
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
export function foundPath(can, x, y, grid, path) {
  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;
  
  grid.forEach(row => {
  
  row.forEach(node => {
    if (res.includes(node)) {
      let pos = node.position;
      let horizontalStart = pos[0] * xSpacing
      let verticalStart = pos[1] * ySpacing
      ctx.fillStyle = 'pink'
      ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
    }
  })
  });
}

export function finalPath(can, x, y, res) {
  let ctx = can.getContext('2d')
  let xSpacing = can.width / x;
  let ySpacing = can.height / y;

  var final = setInterval(finalState, 50, res);

  function finalState(arr) {
    let node = arr.pop()

    if (arr.length === 0) {clearInterval(final)}

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

  // grid.forEach(row => {
  
  // row.forEach(node => {
  //   if (res.includes(node)) {
  //     let pos = node.position;
  //     let horizontalStart = pos[0] * xSpacing
  //     let verticalStart = pos[1] * ySpacing
  //     ctx.fillStyle = 'red'
  //     ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //   }
  // });
  // });
  // grid.forEach(row => {
  
  //   row.forEach(node => {
  //     if (node.status === 'end') {
  //       let pos = node.position;
  //       let horizontalStart = pos[0] * xSpacing
  //       let verticalStart = pos[1] * ySpacing
  //       ctx.fillStyle = 'blue'
  //       ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //     } else if (node.status === 'start') {
  //       let pos = node.position;
  //       let horizontalStart = pos[0] * xSpacing
  //       let verticalStart = pos[1] * ySpacing
  //       ctx.fillStyle = 'blue'
  //       ctx.fillRect(horizontalStart, verticalStart, xSpacing, ySpacing)
  //     }
  //   });
  //  });
}