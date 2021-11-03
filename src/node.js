
class PathNode {
  constructor (xPosition, yPosition, status='valid') {
    this.x = xPosition
    this.y = yPosition
    this.status = status
    this.adjacent = []
    this.g = 0;
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
    return Math.abs(num1 + num2)
  }
  estimatedCost(previousNode) {
    return this.heuristic + previousNode.g + 1
  }
}

export default PathNode