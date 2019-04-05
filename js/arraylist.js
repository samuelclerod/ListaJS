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
        if(position>-1 && position<=this.size())
            this.data.splice(position,0,element);
    }
    
    removeAt(position){
        if (position > -1 && position < this.size())
            this.data.splice(position,1);
    }
    
    remove(element){
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    
    indexOf(element){
        for (let index = 0; index < this.data.length; index++)
            if(element===this.data[index]) 
                return index;
        return -1;
    }
    
    isEmpty(){
        return this.size()===0;
    }
    
    size(){
        return this.data.length;
    }
    
    getElement(position){
        if (position >= 0 && position < this.size())
            return this.data[position];
        return null;
    }

    search(value){
        return this.data.some((n)=> n===value)
    }
}