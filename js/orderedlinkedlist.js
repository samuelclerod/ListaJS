class OrderedLinkedList extends LinkedList {
    constructor() {
        super()
    }

    append(value) {
        //TODO implementar metodo para adicionar de forma ordenada
    }

    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}