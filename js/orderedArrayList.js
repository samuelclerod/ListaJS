class OrderedArrayList extends ArrayList{
    constructor(){
        super();
    }
    insertOrdered(element){
        if(this.data.length===0){
            super.append(element);
        }else{
            let i;
            for (i = 0; (i < this.data.length && this.data[i]<element); i++);
            this.data.splice(i,0,element);
        }
    }   
    append(element){
        this.insertOrdered(element);
    }

    insert(position, element){
        this.insertOrdered(element);
        console.log("Junio, em lista ordenadas não podemos definir a posição...")
    }
}