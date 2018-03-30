class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    show(separator=', '){
        let string = '',
            current = this.head;
        if(current!=null){
            string+=current.element;
            while(current.next){
                current=current.next;
                string+= separator+current.element;
            }
        }
        return string;
    }

    append(element){
        let node = new Node(element),
            current;
        if(this.head==null){// é primeiro elemento inserido
            this.head = node;
        }else{ //já existem elementos na lista
            current=this.head
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++
    }

    insert(position, element){
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
                    index++;
                    previous=current;
                    current=current.next
                }
                node.next = current;
                previous.next = node;
            }
            this.length++
            return true
        }else{
            return false;
        }
    }

    removeAt(position){
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index=0;
            if(position===0){
                this.head = current.next;
            }else{
                while(index < position){
                    index++;
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next
            }
            this.length--;
            current.next=null;
            return current.element;
        }else{
            return null;
        }
    } 
    
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element){
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
    
    isEmpty(){
        return this.head===null;
    }

    size(){
        return this.length;
    }

    getElement(position){
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