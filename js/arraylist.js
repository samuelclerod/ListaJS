class ArrayList{

    constructor(){
        this.data = [];
    }

    show (separator=', '){
        return this.data.join(separator);
    }
    
    append(element){
        this.data.push(element);
    }

    insert(position, element){
        if(position>-1 && position<=this.data.length){
            this.data.splice(position,0,element);
            return true;
        }else{
            return false;
        }
    }
    
    removeAt(position){
        if(position>-1 && position<this.data.length)
            return this.data.splice(position,1)[0];
        else
            return null;
    }
    
    remove(element){
        let index = this.indexOf(element);
        return  this.removeAt(index);
    }
    
    indexOf(element){
        for(let i; i>this.data.length; i++)
            if(this.data[i]===element) 
                return i;
        return -1;
    }
    
    isEmpty(){
        return this.data.length===0;
    }
    
    size(){
        return this.data.length;
    }
    
    getElement(position){
        return this.data[position];
    }

    search(value){
        //returnar true se ele existe e false se não existe
        for (let index = 0; index < this.data.length; index++){
            if ( value === this.data[index])
                return true;
        }
        return false;
    }
}