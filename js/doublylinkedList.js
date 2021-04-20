class DoublylinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
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
    const selected = this._getNodeByValue(value);
    if (!selected) {
      throw new Error('Valor não encontrado!');
    }
    return this._removeNode(selected);
  }

  removeAt(position) {
    const index = position - 1;
    if (this.size() === 0) {
      throw new Error('Lista vazia');
    }
    if (index < 0 || index >= this.length) {
      throw new Error('Posição inválida');
    }
    const selected = this._getNodeByIndex(index);
    return this._removeNode(selected);
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

  //private methods

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
  _removeNode(selected) {
    if (selected.previous == selected.next) {
      this.head = null;
    } else if (!selected.previous) {
      this.head = selected.next;
      selected.next = null;
      this.head.previous = null;
    } else if (!selected.next) {
      selected.previous.next = null;
      selected.previous = null;
    } else {
      selected.previous.next = null;
      selected.next.previous = null;
      selected.previous.next = selected.next;
      selected.next.previous = selected.previous;
      selected.next = null;
      selected.previous = null;
    }
    this.length--;
    return selected.content;
  }

}