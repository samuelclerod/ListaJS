class ArrayList {
  constructor() {
    this.data = new Array()
  }

  append(value) {
    this.data[this.size()] = value
  }

  insert(position, value) {
    if (position < 0 || position > this.size()) {
      throw new Error('Invalid position')
    }

    if (position == this.data.length) {
      this.data.push(value)
    } else {
      this.data.splice(position, 0, value)
    }
  }

  remove(value) {
    let index = this._getIndexOf(value)

    this.removeAt(index)
  }

  removeAt(position) {
    if (position < 0 || position > this.size() - 1) {
      throw new Error('Invalid position')
    }

    return this.data.splice(index, 1)
  }

  size() {
    return this.data.length
  }

  toString(separator = '-') {
    return this.data.join(separator)
  }

  _getIndexOf(value) {
    if (this.data.length == 0) {
      throw new Error('empty list')
    }

    let i = 0
    while (i < this.data.length) {
      if (this.data[i] == value) {
        break
      }
      i++
    }

    if (i == this.data.length) {
      throw new Error('not found')
    }

    return i
  }
}
