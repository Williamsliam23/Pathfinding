

const pathFind = function(grid, start, end){
  var openList = [];
  var closedList = [];
  var shortestPath = [];

  openList.push(start)

  while (openList.length > 0) {

    let lowestScored = 0;

    for (let i = 0; i < openList.length; i++) {

      if (openList[i].f < openList[lowestScored].f) {
        lowestScored = i;
      }
    }

    let current = openList[lowestScored]

    if (current.status === 'end') {
      let tempNode = current;

      shortestPath.push(end) //include end point in path

      while (tempNode.parent) {
        shortestPath.push(tempNode.parent)
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
      if (check.visited === false) {
        bestG = true;
        check.g = updateG
        check.visited = true;
        openList.push(check)
      } else if (updateG < check.g) {
        bestG = true;
      }
      if (bestG) {
        check.setparent(current);
        check.g = updateG;
        check.f = check.h + check.g
      }
    }
  }
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
//         let check =check
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