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
      throw new Error('Informe um valor válido')
    }

    const node = new Node(value)

    if (this.head == null) {
      this.head = node
    } else {
      this.getLast().next = node
    }
    this.length++
  }

  insert(position, value) {
    if (position < 0 || position > this.size()) {
      throw new Error('Invalid position')
    }

    if (position == this.length) {
      this.append(value)
      return
    }

    const newNode = new Node(value)

    if (position == 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let previous = this.head
      let current = previous.next
      let index = 1
      while (index != position) {
        index++
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current
    }

    this.length++
  }

  remove(value) {
    if (!value) {
      throw new Error('Digite um valor válido')
    }
    let current = this.head
    let previous = null

    while (current != null) {
      if (current.content === value) {
        break
      }
      previous = current
      current = current.next
    }
    if (current == null) {
      return null
    }

    if (current == this.head) {
      this.head = current.next
    } else {
      previous.next = current.next
    }
    current.next = null
    this.length--

    return current.content
  }

  removeAt(position) {
    if (position < 0 || position > this.size() - 1) {
      throw new Error('Invalid position')
    }

    let current = this.head
    let previous = null
    let index = 0
    while (index != position) {
      index++
      previous = current
      current = current.next
    }

    if (index == 0) {
      this.head = this.head.next
    } else {
      previous.next = current.next
    }
    current.next = null
    this.length--
    return current.content
  }

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
