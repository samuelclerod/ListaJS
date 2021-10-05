class ArrayList{

    constructor(size = 0){
        this.data = new Array(size);
    }

    append(value){
        this.data.push(value);
    }

    insert(position, value){
        const index = position-1;
        if(index>=0 && index<=this.size()){
            this.data.splice(index, 0, value);
        }
    }

    remove(value){
        const index = this.data.findIndex(element => element===value)
        return this.removeAt(index+1)
    }

    removeAt(position){
        const index = position-1;
        if(index>=0 && index<this.size()){
            return this.data.splice(index, 1)[0]
        }
    }

    size(){
        return this.data.length
    }

    show(separator='-'){
        return this.data.join(separator)
    }

}