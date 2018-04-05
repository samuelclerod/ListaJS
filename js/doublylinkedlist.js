class DoublyLinkedList extends LinkedList{
    
    constructor(){
        super();
        this.tail = null;
    }

    append(element){
        let node = new Node(element),
            current = null;
        if(this.head===null){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.previous=this.tail;
            this.tail=node;
        }
        this.length++;
    }

    insert(position, element){
        if(position>=0 && position<=this.length){
            let node = new Node(element),
                current = this.head,
                index = 0;
                if(position===0){//será inserido na posição 0
                    if(!this.head){
                        this.head=node;
                        this.tail=node;
                    }else{
                        node.next = this.head;
                        current.previous = node;
                        this.head=node;
                    }
                }else if(position===this.length){//inserido fim
                    current=this.tail;
                    current.next=node;
                    node.previous=current;
                    this.tail=node;
                }else{//inserido no meio
                    ///...
                }
            this.length++;
            return true;
        }else{
            return false;
        }
        
    }

    removeAt(position){}

}