class OrderedLinkedList extends LinkedList {
  append(value) {
    this._checkValue(value);

    let current = this.head,
      previous = null;
    while (current != null && current.content < value) {
      previous = current;
      current = current.next;
    }

    const newNode = new Node(value);
    if (!previous) {
      this.head = newNode;
      newNode.next = current;
    } else {
      previous.next = newNode;
      newNode.next = current;
    }

    this.length++;
  }

  insert(position, value) {
    throw new Error("Indisponível na lista ordenada");
  }
}
