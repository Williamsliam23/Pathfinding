
class PathNode {
  constructor (xPosition, yPosition, status='valid') {
    this.x = xPosition
    this.y = yPosition
    this.status = status
    this.adjacent = []
    this.g = 0;
    this.f = 0;
    // this.h = 0;
    this.visited = false;
    this.parent;
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
    console.log(endNode)
    console.log(endNode.x)
    console.log(this.x)
    let num1 = Math.abs(this.x - endNode.x)
    console.log(num1)
    let num2 = Math.abs(this.y - endNode.y)
    console.log(num2)
    this.h = num1 + num2
  }
  setparent(lastNode) {
    this.parent = lastNode;
  }
}

export default PathNode