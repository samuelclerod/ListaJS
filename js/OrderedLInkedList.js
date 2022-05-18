
class OrderedLinkedList extends LinkedList {

  constructor() {
    super();
  }

  insert(position, value) {
    throw new Error('Não é possível escolher a posição em lista ordenada');
  }

  append(value) {
    if (this._isInvalid(value)) {
      throw new Error('Valor inválido');
    }

    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {

      let cursor = this.head;
      let previous = null;
      while (cursor !== null) {
        if (cursor.content > value) {
          break;
        }
        previous = cursor;
        cursor = cursor.next;
      }

      if (!previous) {
        this.head = node;
        node.next = cursor;
      } else if (!cursor) {
        previous.next = node;
      } else {
        previous.next = node;
        node.next = cursor;
      }
    }

    this.length++;
  }


}