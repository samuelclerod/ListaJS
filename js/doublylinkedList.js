class DoublylinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  _lastNode() {
    if (!this.head)
      return null
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  _getNodeByIndex(index) {
    let current = this.head, i = 0;
    while (i != index) {
      i++;
      current = current.next;
    }
    return current;
  }

  _getNodeByValue(value) {
    let current = this.head;
    while (current && value != current.content) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    let newNode = new Node(value);
    const lastNode = this._lastNode();
    if (!lastNode) {
      this.head = newNode;
    } else {
      lastNode.next = newNode;
      newNode.previous = lastNode;
    }
    this.length++;
  }

  insert(position, value) {
    const index = position - 1;
    if (index < 0 || index > this.length) {
      throw new Error('Posição inválida');
    }

    if (this.length === 0 || index === this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const current = this._getNodeByIndex(index);

    if (!current.previous) {
      this.head = newNode;
      current.previous = newNode;
      newNode.next = current;
    } else if (!current.next) {
      current.next = newNode;
      newNode.previous = current;
    } else {
      newNode.previous = current.previous
      newNode.next = current;
      current.previous.next = newNode;
      current.previous = newNode;
    }

    this.length++;
  }

  remove(value) {

  }

  removeAt(position) {

  }

  size() {
    return this.length;
  }

  toString(separator = '-') {
    let output = '';
    let current = this.head;
    while (current !== null) {
      output += current.content + separator;
      current = current.next;
    }
    return output.substring(0, (output.length - separator.length));
  }

}