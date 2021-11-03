

const pathFind = function(grid){
  const start = grid[0][0]
  const end = grid[1][1]
  const openList = [start];
  const closedList = [];
  const shortestPath = [];
  console.log('the array')

  while (openList.length > 0) {
    console.log('the array')
    let lowestScored = 0;
    start.f = 10000;
    for (let i = 0; i < openList.length; i++) {
      if (openList[i].f <= openList[lowestScored].f) {
        lowestScored = i;
        console.log('the array')
      }
    }
    console.log(start.f)
    let current = openList[lowestScored]
    console.log('the array')
    if (current.status === 'end') {
      console.log('the array')
      let tempNode = current;
      tempNode.setparent(current)
      while (tempNode.parent) {
        shortestPath.push(tempNode.parent)
        console.log(shortestPath)
        tempNode = tempNode.parent;
      }
      return shortestPath // path from end to start
    }
    openList.splice(lowestScored, 1);
    closedList.push(current)
    let cardinalNodes = current.adjacent;
    for (let i = 0; i < cardinalNodes.length; i++) {
      let check = cardinalNodes[i]
      if (closedList.includes(check) || check.status === 'wall') {
        continue;
      }
      let updateG = current.g + 1;
      let bestG = false;
      if (!cardinalNodes[i].visited) {
        bestG = true;
        cardinalNodes[i].g = updateG
        cardinalNodes[i].heuristic(end);
        // openList.push(cardinalNodes[i])
      } else if (updateG < cardinalNodes[i].g) {
        bestG = true;
      }
      if (bestG) {
        cardinalNodes[i].parent = current;
        cardinalNodes[i].g = updateG;
        cardinalNodes[i].f = cardinalNodes[i].h + cardinalNodes[i].g
        console.log('made it')
      }
    }
  }
  console.log('the array')
  return shortestPath;
}



// class AStar {
//   constructor (grid) {
//     this.findPath(grid)
//   }
//   findPath() {
//     const start = [0, 0]
//     const ending = [grid.x][grid.y];
//     const openList = [grid[0][0]];
//     const closedList = [];
//     const shortestPath = [];


//     while (openList.length > 0) {
//       let lowestScored = 0;
//       for (let i = 0; i < openList.length; i++) {
//         if (openList[i].f < openList[lowestScored].f) {
//           lowestScored = i;
//         }
//       }
//       let current = openList[lowestScored]
      
//       if (current.status === 'end') {
//         let tempNode = current;
//         while (tempNode.parent) {
//           shortestPath.push(tempNode.parent)
//           tempNode = tempNode.parent;
//         }
//         return shortestPath // path from end to start
//       }
//       openList.splice(lowestScored);
//       closedList.push(current)
//       cardnialNodes = current.adjacent;
//       for (let i = 0; i < cardinalNodes.length; i++) {
//         let check =cardinalNodes[i]
//         if (closedList.includes(check) || check.status === 'wall') {
//           continue;
//         }
//         if (cardnialNodes[i].status === 'valid') {
//           cardnialNodes.g = current.g + 1;
//           cardnialNodes.heuristic(ending);
//           cardnialNodes.estimatedCost();

//         }
//       }
//     }
//     return shortestPath;
//   }
// }

export default pathFind