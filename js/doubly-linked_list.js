
class DoublyLinkedList extends LinkedList {

    constructor() {
        super()
        this.tail = null
    }

    append(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
    }

    insert(position = 1, value) {
        if (this.head == null || position > this.length) {
            return this.append(value)

        }
        if (position >= 1) {
            let newNode = new Node(value)
            let index = 1, current = this.head
            while (index != position) {
                current = current.next
                index++
            }
            if (current === this.head) {
                this.head = newNode
            } else {
                current.previous.next = newNode
                newNode.previous = current.previous
            }
            newNode.next = current
            current.previous = newNode
            this.length++
        } else throw new Error("Posição inválida")
    }

    removeAt(position) {
        if (position > 0 && position <= this.length) {

            if (this.head == this.tail) {
                const value = this.head.content
                this.head = this.tail = null
                this.length = 0
                return value
            }
            let index = 1, current = this.head
            while (index < position) {
                index++
                current = current.next
            }
            if (current === this.head) {
                this.head = this.head.next;
                this.head.previous = null
                current.next = null
            } else if (current === this.tail) {
                this.tail = this.tail.previous
                this.tail.next = null
                current.previous = null
            } else {
                current.previous.next = current.next
                current.next.previous = current.previous
                current.previous = current.next = null
            }

            this.length--
            return current.content;
        }

        return null
    }

}