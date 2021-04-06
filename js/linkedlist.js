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

  _getReferences(index) {
    let current = this.head, previous = null, i = 0;
    while (i != index) {
      i++;
      previous = current;
      current = current.next;
    }
    return [previous, current];
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

    const [previous, current] = this._getReferences(index);

    newNode.next = current;
    if (previous) {
      previous.next = newNode;
    } else {
      this.head = newNode;
    }

    this.length++;
  }

  remove(value) {
    if (this.data.length === 0)
      throw new Error('Lista vazia!');
    //TODO busca
    //TOTO se o elemento não existe:  throw new Error('Item inexistente!');
    //TODO se existir, remove e retorna o valor
  }


  removeAt(position) {
    if (this.length === 0)
      throw new Error('Lista vazia!');
    const index = position - 1;
    const lastIndex = this.length - 1;
    if (index < 0 || index > lastIndex) {
      throw new Error('Posição inválida');
    }
    const [previous, current] = this._getReferences(index);

    if (previous) {
      previous.next = current.next;
    } else {
      this.head = current.next
    }
    current.next = null;

    this.length--;
    return current.content;
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