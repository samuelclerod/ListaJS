class LinkedList {
    constructor() {
        this.head = null;
        this.lenght = 0;
    }

    show(separator = ', ') {
        let string = '',
            current = this.head;
        if (current) {
            string += current.element;
            while (current.next) {
                current = current.next;
                string += separator + current.element;
            }
        }
        return string;
    }

    append(element) {
        let node = new Node(element),
            current = this.head;
        if (this.isEmpty()) {
            this.head = node;
        } else {
            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.lenght++;
    }

    insert(position, element) { 
        if(position>=0 && position<=this.lenght){
            let node = new Node(element),
                current = this.head,
                index = 0,
                previous = null;
            if(position===0){//primeiro posição
                node.next = current;
                this.head = node;  
            }else{// depois da primeira
                while(index<position){
                    index++;
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.lenght++
            return true; 
        }else{
            return false;
        }
    }

    remove(element) {
        let index = this.indexOf(element);
        this.removeAt(index);
     }

    removeAt(position) {
        if(position>=0 && position<this.lenght){
            let current = this.head,
                previous = null,
                index = 0;
            if(position===0){
                this.head = current.next;
                current.next = null;
                this.lenght--;
            }else{
                while(index<position){
                    index++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next = null;
                this.lenght--;
            }
            return current.element;
        } else{
            return null
        }
    }

    indexOf(element) {
        let current = this.head,
            index = 0;
        while(current){
            if(element===current.element)
                return index;
            index++
            current = current.next;
        }
        return -1;
    }

    getElement(position) {
        let current = this.head,
            index = 0;
        while (current){
            if(index===position)
                return current.element;
            index++
            current = current.next;
        }
        return null;
     }

    isEmpty() {
        return this.head == null;
    }

    size() {
        return this.lenght;
    }
}