
class ArrayList {

    constructor() {
        this.data = [];
    }

    append(value) {
        if (this._isInvalid(value)) {
            throw new Error('Valor inválido');
        }

        this.data.push(value);
    }

    insert(position, value) {

        if (this._isInvalid(value)) {
            throw new Error('Valor inválido');
        }

        const index = position - 1;

        if (index < 0 || index > this.data.length) {
            throw new Error('Posição inválida');
        }

        if (index === this.data.length) {
            this.append(value);
        } else {
            this.data.splice(index, 0, value);
        }

    }

    remove(value) {
        if (this._isInvalid(value)) {
            throw new Error('Valor inválido');
        }
        const index = this.data.indexOf(value);

        if (index === -1) {
            throw new Error('Valor não encontrado');
        }
        const [removed] = this.data.splice(index, 1);

        return removed;
    }

    removeAt(position) {
        const index = position - 1;

        if (index < 0 || index >= this.data.length) {
            throw new Error('Posição inválida');
        }

        const [removed] = this.data.splice(index, 1);

        return removed;
    }

    size() {
        return this.data.length;
    }

    toString(separator = '-') {
        return this.data.join(separator);
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

}