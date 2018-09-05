class LinkedList {
    constructor() {
        this.head = null;
        this.lenght = 0;
    }

    show(separator = ', ') {
        let string = '',
            current = this.head;
        if (current) {
            string += current.element;
            while (current.next) {
                current = current.next;
                string += separator + current.element;
            }
        }
        return string;
    }

    append(element) {
        let node = new Node(element),
            current = this.head;
        if (this.isEmpty()) {
            this.head = node;
        } else {
            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.lenght++;
    }

    insert(position, element) { }

    remove(element) { }

    removeAt(position) { }

    indexOf(element) { }

    isEmpty() {
        return this.head == null;
    }

    size() {
        return this.lenght;
    }

    getElement(position) { }
}