
class PathNode {
  constructor (xPosition, yPosition, status='valid') {
    this.x = xPosition
    this.y = yPosition
    this.status = status
    this.adjacent = []
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.visited = false;
    this.parent = null
  }
  get position () {
    return [this.x, this.y]
  }
  addAdjacent(node) {
    this.adjacent.push(node)
  }
  updateStatus(newStatus) {
    this.status = newStatus
  }
  heuristic(endNode) {
    let num1 = this.x - endNode.x
    let num2 = this.y - endNode.y
    this.h = Math.abs(num1 + num2)
  }
  setparent(lastNode) {
    this.parent = lastNode;
  }
}

export default PathNode