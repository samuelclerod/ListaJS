
class OrderedArrayList extends ArrayList {

    constructor() {
        super()
    }

    append(value) {
        if (this.data.length == 0) {
            return super.append(value)
        }
        let index = 0
        for (index = 0; index < this.data.length; index++) {
            if (this.data[index] >= value) {
                break
            }
        }
        this.data.splice(index, 0, value)
    }

    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}