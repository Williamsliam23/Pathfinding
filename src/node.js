
class PathNode {
  constructor (xPosition, yPosition, status='valid') {
    this.x = xPosition
    this.y = yPosition
    this.status = status
    this.adjacent = []
  }
  get position () {
    return [this.x, this.y]
  }
  addAdjacent(node) {
    this.adjacent.push(node)
  }
}

export default PathNode