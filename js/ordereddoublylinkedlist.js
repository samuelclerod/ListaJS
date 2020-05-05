
class OrderedDoublyLinkedList extends DoublyLinkedList {
    constructor() {
        super();
    }

    append(value) {
        const newNode = new Node(value)

        //verifica se nao tem elementos na lista
        if (this.head == null) {
            return this.head = newNode
        }

        //busca o local correto para inserir na lista
        let current = this.head
        while (current != null && current.content < value) {
            current = current.next
        }

        //inserir o elemento na lista de acorodo com a posição
        if (current == null) { //insere no final
            current = this.lastNode()
            current.next = newNode;
            newNode.prev = current
        } else if (current.prev == null) { //insere no começo
            this.head = newNode;
            newNode.next = current
            current.prev = newNode
        } else {// insere no meio (nem é a ultima nem a primeira)
            newNode.prev = current.prev
            newNode.next = current
            current.prev.next = newNode
            current.prev = newNode
        }

    }
    //metodo auxiliar
    lastNode() {
        let node = this.head
        while (node.next != null) {
            node = node.next
        }
        return node
    }

    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}