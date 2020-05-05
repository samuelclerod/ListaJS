
class OrderedArrayList extends ArrayList {

    constructor() {
        super()
    }

    append(value) {
        //se tiver vazio, sómente insere
        if (this.data.length == 0) {
            return super.append(value) //o retorno já encerra a função
        }

        //procura o local pra inserir na lista
        let index = 0
        for (index = 0; index < this.data.length; index++) {
            if (this.data[index] >= value) {
                break
            }
        }
        //insere na posição
        this.data.splice(index, 0, value)
    }

    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}