function ArrayList(){
    data = [];

    this.show = function(separator=', '){
        return data.join(separator);
    }
    
    this.append = function(element){
        data.push(element);
    }

    this.insert = function(position, element){
        if(position>-1 && position<data.length){
            data.splice(position, 0, element);
            return true;
        }else{
            return false;
        }
    }
    
    this.removeAt = function(position){
        if(position>-1 && position<data.length){
            let current = data[position];
            data.splice(position, 1);
            return current;
        }else{
            return null;
        }

    }
    
    this.remove = function(element){
        index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    this.indexOf = function(element){
        for (let i = 0; i < data.length; i++) {
            if(element===data[i]) return i;
        }
        return -1;
    }
    
    this.isEmpty = function(){
        return data.length === 0;
    }
    
    this.size = function(){
        return data.length;
    }
    
    this.getElement = function (position){
        return data[position];
    }
}