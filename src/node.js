
class PathNode {
  constructor (xPosition, yPosition) {
    this.x = xPosition
    this.y = yPosition
    this.adjacent = []
  }
  get position () {
    return [this.x, this.y]
  }
  addAdjacent(node) {
    this.adjacent.push(node)
  }
  printNode() {
    let st = '';
    for(let i = 0; i < this.adjacent.length; i++) {st += '(' + this.adjacent[i].position + ') '}
    console.log(`x: ${this.x}, y: ${this.y}, adjacent: ${st}`)
  }
}

export default PathNode