
class ArrayList {
    constructor() {
        this.data = [];
    }

    append(value) {
        this.data.push(value);
    }

    insert(position, value) {
        const index = position - 1;
        if (index < 0 || index > this.data.length) {
            throw new Error('Posição inválida');
        }
        this.data.splice(index, 0, value);

    }

    remove(value) {
        if (this.data.length === 0)
            throw new Error('Lista vazia!');
        const index = this.data.indexOf(value);
        if (index === -1)
            throw new Error('Item inexistente!');
        return this.removeAt(index + 1);
    }

    removeAt(position) {
        if (this.data.length === 0)
            throw new Error('Lista vazia!');
        const index = position - 1;
        const lastIndex = this.data.length - 1;
        if (index < 0 || index > lastIndex) {
            throw new Error('Posição inválida');
        }
        return this.data.splice(index, 1);
    }

    size() {
        return this.length;
    }

    toString(separator = '-') {
        return this.data.join(separator);
    }

}