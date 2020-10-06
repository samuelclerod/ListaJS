
class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
    }

    _lastNode() {
        let current = this.head
        while (current.next != null) {
            current = current.next
        }
        return current
    }

    append(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
        } else {
            this._lastNode().next = newNode
        }
        this.length++
    }

    insert(position = 1, value) {
        if (this.head == null || position > this.length) {
            this.append(value)
            return
        }

        if (position >= 1) {
            let newNode = new Node(value)
            if (position == 1) {// primeira posição
                newNode.next = this.head
                this.head = newNode
            } else { // no meio da lista
                let previous = null, current = this.head, pos = 1
                while (pos != position) { //navegar até a posição correta
                    pos++;
                    previous = current
                    current = current.next
                }
                newNode.next = current
                previous.next = newNode
            }
            this.length++
        }
    }

    remove(value) {
    }

    removeAt(position) {
    }

    size() {
        return this.length;
    }

    toString(separator = '-') {
        let output = ''
        if (this.head) {
            for (let current = this.head; current != null; current = current.next) {
                output += current.content + separator
            }
            output = output.substring(0, output.length - separator.length)
        }
        return output
    }

}