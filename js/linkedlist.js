class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
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
    if (this.length === 0) {
      return this.append(value);

    }
    const index = position - 1;
    if (index < 0 || index > this.length) {
      throw new Error('Posição inválida');
    }
    const newNode = new Node(value);

    const [previous, current] = this._getReferencesByIndex(index);

    newNode.next = current;
    if (previous) {
      previous.next = newNode;
    } else {
      this.head = newNode;
    }

    this.length++;
  }

  remove(value) {
    if (this.length === 0)
      throw new Error('Lista vazia!');
    const [previous, current] = this._getReferencesByValue(value);
    if (current === null)
      throw new Error('Item inexistente!');
    return this._removeNode(previous, current);
  }


  removeAt(position) {
    if (this.length === 0)
      throw new Error('Lista vazia!');
    const index = position - 1;
    const lastIndex = this.length - 1;
    if (index < 0 || index > lastIndex) {
      throw new Error('Posição inválida');
    }
    const [previous, current] = this._getReferencesByIndex(index);
    return this._removeNode(previous, current);
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


  _lastNode() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  _getReferencesByIndex(index) {
    let current = this.head, previous = null, i = 0;
    while (i != index) {
      i++;
      previous = current;
      current = current.next;
    }
    return [previous, current];
  }

  _getReferencesByValue(value) {
    let current = this.head, previous = null;
    while (current && value != current.content) {
      previous = current;
      current = current.next;
    }
    return [previous, current];
  }

  _removeNode(previous, current) {
    if (previous) {
      previous.next = current.next;
    } else {
      this.head = current.next
    }
    current.next = null;
    this.length--;
    return current.content;
  }
}