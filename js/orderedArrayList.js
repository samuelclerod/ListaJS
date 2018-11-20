class OrderedArrayList extends ArrayList{
    constructor(){
        super();
    }
    search(value){
        //retornar true se ele existe e false se não existe
        return this.binarySearch(value, 0, this.data.length-1)
    }
    binarySearch(value, begin, end){
        if(begin>end)
            return false;
        let m = parseInt((begin+end)/2);
        if(this.data[m]===value)
            return true;
        else if(value<this.data[m]){
            return this.binarySearch(value, begin, m-1);
        }else{
            return this.binarySearch(value, m+1, end);
        }
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