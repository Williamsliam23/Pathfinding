

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
      let lowestscore = 0;
      
      currentLocation.updateStatus('')
      let listgrowth = grid[x][y].adjacent
      for (let i = 0; i < listgrowth.length; i++) {
        if (listgrowth[i].status === 'valid') {
          openList.push([listgrowth[i]])
        } else if (listgrowth[i].status === 'end') {

        }
      }
    }
  }
}