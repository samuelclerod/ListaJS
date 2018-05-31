class ArrayList{

    constructor(){
        this.data = [];
    }

    search(value){
        return this.binarySearch(value, 0, this.data.length-1)
    }
    binarySearch(value, begin, end){
        if(begin>end) 
            return -1;//se não achou ou o array está vazio
        let m = parseInt((begin+end)/2);//calcula o indice do meio
        if(this.data[m]==value){
            return m;
        } else if(value<this.data[m]){
            return this.binarySearch(value, begin, m-1);
        }else{
            return this.binarySearch(value, m+1, end);
        }
            
    }

    show (separator=', '){
        return this.data.join(separator);
    }
    
    append(element){
        this.data.push(element);
    }

    insert(position, element){
        if(position>-1 && position<=this.data.length){
            this.data.splice(position, 0, element);
            return true;
        }else{
            return false;
        }
    }
    
    removeAt(position){
        if(position>-1 && position<this.data.length){
            let current = this.data[position];
            this.data.splice(position, 1);
            return current;
        }else{
            return null;
        }

    }
    
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    indexOf(element){
        for (let i = 0; i < this.data.length; i++) {
            if(element===this.data[i]) return i;
        }
        return -1;
    }
    
    isEmpty(){
        return this.data.length === 0;
    }
    
    size(){
        return this.data.length;
    }
    
    getElement(position){
        return this.data[position];
    }
}