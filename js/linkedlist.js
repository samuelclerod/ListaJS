class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  _lastNode() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this._lastNode().next = newNode;
    }
    this.length++;
  }

  insert(position, value) {

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