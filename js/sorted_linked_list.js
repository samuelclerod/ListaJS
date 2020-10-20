class SortedLinkedList extends LinkedList {

    append(value) {
        let current = this.head, previous = null
        while (current) {
            if (current.content > value) break
            previous = current
            current = current.next
        }
        if (current == null) {
            return super.append(value);
        }
        let newNode = new Node(value)

        if (previous)
            previous.next = newNode
        else
            this.head = newNode

        newNode.next = current
        this.length++
    }

    insert(position = 1, value) {
        throw new Error("Não é possível escolher a posição\nde inserção em uma lista ordenada")
    }

}