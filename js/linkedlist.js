
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
    }

    remove(value) {

    }

    removeAt(position) {

    }

    size() {

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