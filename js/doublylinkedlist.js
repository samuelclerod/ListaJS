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
        if (position >= 0 && position <= this.size()) {
            const newNode = new Node(value);
            if (position == this.size()) {
                this.append(value)
            } else if (position == 0) {
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            } else {
                let current = this.head, index = 0
                while (index < position) {
                    current = current.next
                    index++
                }
                newNode.next = current
                newNode.prev = current.prev
                current.prev = newNode
                newNode.prev.next = newNode
            }

        }
    }

    removeAt(position) {
        if (position >= 0 && position < this.size()) {
            let index = 0, current = this.head
            while (index < position) {
                current = current.next
                index++
            }
            if (current.prev == null) {
                this.head = current.next
                this.head.prev = null
                current.next = null
            } else if (current.next != null) {
                current.prev.next = current.next
                current.next.prev = current.prev
                current.prev = null
                current.next = null
            } else {
                current.prev.next = null
                current.prev = null
            }
            return current.content
        }
        return null
    }


}