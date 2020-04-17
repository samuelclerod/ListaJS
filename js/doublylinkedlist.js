class DoublyLinkedList extends LinkedList {
    constructor() {
        super()
    }

    append(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null)
                current = current.next
            current.next = newNode
            newNode.prev = current
        }
    }

    insert(position, value) {
        //TODO inserir na lista duplamente encadeada
    }

    removeAt(position) {
        //TODO implementar remover elemento na posição
    }


}