class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    this._checkValue(value);
    const newNode = new Node(value);
    if (this.head) {
      const lastNode = this._lastNode();
      lastNode.next = newNode;
      newNode.previous = lastNode;
    } else {
      this.head = newNode;
    }
    this.length++;
  }

  insert(position, value) {
    this._checkValue(value);
    const index = position - 1;
    if (index >= 0 && index <= this.length) {
      const current = this._navigateTo(index);

      if (!current) {
        return this.append(value);
      }

      const { previous } = current;

      const newNode = new Node(value);
      if (!previous) {
        newNode.next = current;
        current.previous = newNode;
        this.head = newNode;
      } else {
        newNode.previous = previous;
        newNode.next = current;
        previous.next = newNode;
        current.previous = newNode;
      }
      this.length++;
    } else {
      throw new Error("Posição inválida");
    }
  }

  remove(value) {
    this._checkValue(value);
    const position = this._getPosition(value);
    if (position == 0) {
      throw new Error("Valor não encontrado");
    }
    return this.removeAt(position);
  }

  removeAt(position) {
    const index = position - 1;
    if (index >= 0 && index < this.length) {
      const current = this._navigateTo(index);
      const { previous, next } = current;

      if (!previous && !next) {
        this.head = null;
      } else if (!previous) {
        next.previous = null;
        current.next = null;
        this.head = next;
      } else if (!next) {
        previous.next = null;
        current.previous = null;
      } else {
        previous.next = next;
        next.previous = previous;
        current.next = current.previous = null;
      }
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
      current = this.head;
    while (fakeIndex != index) {
      fakeIndex++;
      current = current.next;
    }

    return current;
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

  _checkValue(value) {
    if (!value) {
      throw new Error("Valor inválido!");
    }
  }
}
