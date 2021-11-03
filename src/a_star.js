import { default as Node } from "/node.js";

class AStar {
  constructor (grid) {
    const openList = [startPosition];
    const closedList = [];
    const shortestPath = [];
  }
  findPath(startPosition, grid) {
    let xPos = startPosition[0]
    let yPos = startPosition[1]


    while (openList.length > 0) {
      let currentLocation = openList.shift();
      let listgrowth = grid[xPos][yPos].adjacent
      for (let i = 0; i < listgrowth.length; i++) {
        if (listgrowth[i].status === 'valid') {
          openList.push([listgrowth[i].x, listgrowth[i].y])
        }
      }
    }
  }
}