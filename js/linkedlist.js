function Node(element){
    this.element=element;
    this.next=null;
}
function LinkedList(){
    var length = 0;
    var head = null;

    this.show = function(separator=', '){
        let string = '',
            current = head;
        if(current!=null){
            string+=current.element;
            while(current.next){
                current=current.next;
                string+= separator+current.element;
            }
        }
        return string;
    }

    this.append = function(element){
        let node = new Node(element),
            current;
        if(head==null){// é primeiro elemento inserido
            head = node;
        }else{ //já existem elementos na lista
            current=head
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++
    }

    this.insert = function(position, element){
        if(position>=0 && position<=length){
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if(position===0){ //adicionar na primeira posição
                node.next = current;
                head = node;
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
        let current = head;
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
        return head===null;
    }

    this.size = function(){
        return length;
    }

    this.getElement = function (position){
        let current = head;
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