function Node(element){
    this.element=element;
    this.next=null;
}
function LinkedList(){
    var length =0;
    var head = null;
    this.show = function(separator=', '){}

    this.append = function(element){
        let node = new Node(element);
        let current;
        if(this.head===null){// é primeiro elemento inserido
            this.head = node;
        }else{ //já existem elementos na lista
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++
    }

    this.insert = function(position, element){
        if(position>=0 && position<=this.length){
            let node = new Node(element);
            let current = this.head;
            let previous;
            let index = 0;
            if(position===0){ //adicionar na primeira posição
                node.next = current;
                this.head = node;
            }else{ //depois da primeira posição
                while(index<position){
                    index++
                    previous=current;
                    current=current.next
                }
                node.next = current;
                previous.next = node;
            }
            length++
            return true
        }else{
            return false;
        }
    }

    this.removeAt = function(position){} 
    
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.indexOf = function(element){
        let current = this.head;
        let index = 0;
        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    }
    
    this.isEmpty = function(){
        return this.head===null;
    }

    this.size = function(){
        return this.length;
    }

    this.getElement = function (position){
        let current = this.head;
        let index = 0;
        while(current){
            if(index === position){
                return current.element;
            }
            index++;
            current=current.next;
        }
        return null;
    }
}