import { colorNode, finalPath, path } from "./pathing";

const pathFind = function(grid, start, end, can, x, y){
  const visitedList = []
  const openList = [];
  const closedList = [];
  const shortestPath = [];

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
      path(visitedList.reverse(), x, y, can, shortestPath.reverse())
      return shortestPath.reverse() // path from start to end
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
        visitedList.push(check)
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
  path(visitedList.reverse(), x, y, can, shortestPath.reverse())
  return shortestPath;
}





export default pathFind