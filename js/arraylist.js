
class ArrayList {
    constructor() {
        this.data = []
    }

    append(value) {
        this.data.push(value)
    }

    insert(position, value) {
        if (position >= 0 && position <= this.data.length) {
            this.data.splice(position, 0, value)
        }
    }

    remove(value) {
        const index = this.indexOf(value)
        this.removeAt(index)
    }

    indexOf(value) {
        for (let i = 0; i < this.size(); i++) {
            if (this.data[i] == value) {
                return i
            }
        }
        return -1
    }

    removeAt(position) {
        if (position >= 0 && position < this.data.length) {
            return this.data.splice(position, 1)
        }
    }

    size() {
        return this.data.length
    }

    toString(separator = '-') {
        return this.data.join(separator)
    }

}