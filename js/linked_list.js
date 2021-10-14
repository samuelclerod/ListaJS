class Node {
  constructor(value) {
    this.content = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      this._lastNode().next = newNode;
    } else {
      this.head = newNode;
    }
    this.length++;
  }

  insert(position, value) {
    const index = position - 1;

    if (index >= 0 && index <= this.length) {
      const { current, previous } = this._navigateTo(index);

      const newNode = new Node(value);

      if (!previous) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        previous.next = newNode;
        newNode.next = current;
      }
      this.length++;
    } else {
      throw new Error("Posição inválida");
    }
  }

  remove(value) {
    const position = this._getPosition(value);
    if (position == 0) {
      throw new Error("Valor não encontrado");
    }
    return this.removeAt(position);
  }

  removeAt(position) {
    const index = position - 1;

    if (index >= 0 && index < this.length) {
      const { previous, current } = this._navigateTo(index);

      if (!previous) {
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
      current.next = null;
      this.length--;
      return current.content;
    } else {
      throw new Error("Posição inválida");
    }
  }

  size() {
    return this.length;
  }

  show(separator = "-") {
    let output = "";
    for (let i = this.head; i != null; i = i.next) {
      output += separator + i.content;
    }
    return output.substring(separator.length);
  }

  _lastNode() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  _navigateTo(index) {
    let fakeIndex = 0,
      current = this.head,
      previous = null;
    while (fakeIndex != index) {
      fakeIndex++;
      previous = current;
      current = current.next;
    }

    return { previous, current };
  }

  _indexOf(value) {
    let index = 0,
      current = this.head;
    while (current != null && current.content != value) {
      index++;
      current = current.next;
    }

    if (current == null) return -1;
    return index;
  }

  _getPosition(value) {
    return this._indexOf(value) + 1;
  }
}
