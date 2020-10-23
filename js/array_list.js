class ArrayList {

    constructor() {
        this.data = []
    }

    append(value) {
        this.data.push(value)
    }

    insert(position = 1, value) {
        if (position >= 1 && position <= this.data.length + 1)
            this.data.splice(position - 1, 0, value)
    }

    remove(value) {
        let removed = null
        for (let index = 0; index < this.data.length; index++) {
            if (this.data[index] == value)
                removed = this.removeAt(index + 1)
        }
        return removed
    }

    removeAt(position = 1) {
        if (position >= 1 && position <= this.data.length)
            return this.data.splice(position - 1, 1)
    }

    size() {
        return this.data.length
    }

    toString(separator = '-') {
        return this.data.join(separator)
    }

}