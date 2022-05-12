
class DoublyLinkedList extends LinkedList {

    constructor() {
        super();
    }

    _getBy(index) {
        let cursor = this.head;
        let i = 0;
        while (i < index) {
            i++;
            cursor = cursor.next
        }
        return cursor;
    }

    append(value) {
        if (this._isInvalid(value)) {
            throw new Error('Valor inválido');
        }
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            const lastNode = this._getBy(this.length - 1);
            lastNode.next = node;
            node.previous = lastNode;
        }
        this.length++;
    }

    insert(position, value) {
        if (this._isInvalid(value)) {
            throw new Error('Valor inválido');
        }
        const index = position - 1;

        if (index < 0 || index > this.length) {
            throw new Error('Posição inválida');
        }

        if (index === this.length) {
            this.append(value);
        } else {
            const node = new Node(value);
            const cursor = this._getBy(index);
            if (cursor.previous) {
                cursor.previous.next = node;
                node.previous = cursor.previous;
            } else {
                this.head = node;
            }
            node.next = cursor;
            cursor.previous = node;
            this.length++;
        }
    }

    remove(value) {
        let cursor = this.head;
        let i = 0;
        while (cursor) {
            if (cursor.content === value) {
                return this.removeAt(i + 1);
            }
            cursor = cursor.next;
            i++
        }
        throw new Error('Valor não encontrado');
    }

    removeAt(position) {
        const index = position - 1;

        if (index < 0 || index >= this.length) {
            throw new Error('Posição inválida');
        }

        const deadNode = this._getBy(index);
        if (deadNode.previous === deadNode.next) {
            this.head = null;
        } else if (!deadNode.previous) {
            deadNode.next.previous = null;
            this.head = deadNode.next;
            deadNode.next = null
        } else if (!deadNode.next) {
            deadNode.previous.next = null;
            deadNode.previous = null;
        } else {
            deadNode.previous.next = deadNode.next;
            deadNode.next.previous = deadNode.previous;
            deadNode.next = deadNode.previous = null;
        }

        this.length--;
        return deadNode.content;
    }

}