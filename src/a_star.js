

class AStar {
  constructor (grid) {
    const openList = [grid[0][0]];
    const closedList = [];
    const shortestPath = [];
    this.findPath(openList[0], grid)
  }
  findPath(startPosition, grid) {
    let x = startPosition[0]
    let y = startPosition[1]


    while (openList.length > 0) {
      let lowestScored = 0;
      for (let i = 0; i < openList.length; i++) {
        if (openList[i].estimatedCost() < openList[lowestScored].estimatedCost()) {
          lowestScored = i;
        }
      }
      let current = openList[lowestScored]
      
      if (current.status === 'end') {
        
      }
    }
  }
}