
class PathNode {
  constructor (parentNode=null, position) {
    this.parent = parentNode
    this.position = position
    this.g = 0
    this.h = 0
    this.f = 0
  }
  get parent () {
    return this.parent
  }
  get position () {
    return this.child
  }
}

export default PathNode