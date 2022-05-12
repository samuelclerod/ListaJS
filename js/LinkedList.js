
class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    _isInvalid(value) {
        const validator = [
            (n) => n === undefined,

            (n) => n === null,

            (n) => n === '',

            (n) => !isFinite(n),

            (n) => isNaN(n),
        ]

        return validator.some(fn => fn(value));
    }

    _getLast() {
        let cursor = this.head;//inicialização
        while (cursor.next !== null) { // condição de controle
            cursor = cursor.next;// incremento
        }
        return cursor;
    }

    _getBy(index) {
        let cursor = this.head;
        let previous = null;
        let i = 0;
        while (i < index) {
            i++;
            previous = cursor;
            cursor = cursor.next
        }
        return { previous, current: cursor };
    }

    append(value) {
        if (this._isInvalid(value)) {
            throw new Error('Valor inválido');
        }
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            this._getLast().next = node;// atribuição
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
            const { previous, current } = this._getBy(index);
            if (previous) {
                previous.next = node;
            } else {
                this.head = node;
            }
            node.next = current;
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
        const { previous, current } = this._getBy(index);
        if (previous) {
            previous.next = current.next;
        } else {
            this.head = current.next;
        }
        current.next = null
        this.length--;
        return current.content;
    }

    size() {
        return this.length;
    }

    toString(separator = '-') {
        let cursor = this.head;
        let text = '';
        while (cursor) {
            text += cursor.content + separator;
            cursor = cursor.next;
        }
        const lastSeparatorIndex = text.length - separator.length;


        return text.slice(0, lastSeparatorIndex);
    }

}