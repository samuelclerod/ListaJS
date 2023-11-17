class DynamicList {
  constructor() {
    this.head = null
    this.length = 0
  }

  getLast() {
    let i = this.head
    while (i.next != null) {
      i = i.next
    }
    return i
  }

  append(value) {
    if (!value) {
      return
    }

    const node = new Node(value)

    if (this.head == null) {
      this.head = node
    } else {
      this.getLast().next = node
    }
    this.length++
  }

  insert(position, value) {}

  remove(value) {}

  removeAt(position) {}

  size() {
    return this.length
  }

  toString(separator = '-') {
    let output = ''

    if (this.head == null) {
      return output
    }

    for (let i = this.head; i != null; i = i.next) {
      output = output + i.content + separator
    }

    const outputCut = output.length - separator.length

    output = output.substring(0, outputCut)

    return output
  }
}
