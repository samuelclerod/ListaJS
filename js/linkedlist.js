
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode;
        } else {
            let i = this.head
            while (i.next != null) {
                i = i.next
            }
            i.next = newNode
        }
    }

    insert(position, value) {
        if (position >= 0 && position <= this.size()) {
            let newNode = new Node(value),
                index = 0,
                current = this.head,
                previous = null
            if (position == 0) {
                newNode.next = current
                this.head = newNode
            } else {
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = newNode
                newNode.next = current
            }
        }
    }

    remove(value) {
        //TODO implementar remover elemento
    }

    removeAt(position) {
        //TODO implementar remover elemento na posição
    }

    size() {
        let length = 0
        for (let i = this.head; i !== null; i = i.next) {
            length++
        }
        return length
    }

    toString(separator = '-') {
        let output = ''
        if (this.head) {
            for (let i = this.head; i != null; i = i.next) {
                output += i.content + separator
            }
            const new_output_size = output.length - separator.length
            output = output.substr(0, new_output_size)
        }
        return output
    }

}

class Node {
    constructor(value) {
        this.content = value
        this.next = null
    }
}