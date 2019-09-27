class LinkedList {

    constructor() {
        this.head = null;  
        this.length = 0;     
    }

    append(element) {
        let newNode = new Node(element);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    insert(position, element) {

    }

    remove(element) {
        if(this.isEmpty()) 
            return null;
        let current = this.head,
            previous = null;
        while(current){
            if(current.content==element){
                if(!previous){ //remover o primeiro
                    this.head=current.next;
                }else{
                    previous.next = current.next;
                }
                this.length--;
                current.next=null;
                return current.content;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeAt(position) {

    }

    size() {
        return this.length;
    }

    show(separator = '-') {
        let text = '';
        for(let current = this.head; current!=null ; current = current.next){
            	text += current.content + separator;
        }
        let newSize = text.length-separator.length
        return text.substring(0,newSize);
    }

    isEmpty() {
        return this.head==null;
    }

    getElement(position) {

    }

    search(element) {
        let position = -1.
            current = this.head,
            notFound = true;
        if(!current) return position;
        while(notFound && current){
            if(current.content==element) notFound=false;
            position++;
            current=current.next;
        }
        if(notFound) return -1;
        return position;
    }
}