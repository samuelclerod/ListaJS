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
                while(index<position){
                    index++;
                    current=current.next;
                }
                current.previous.next=node;
                node.previous=current.previous;
                current.previous=node;
                node.next=current;
            }
            this.length++;
            return true;
        }else{
            return false;
        }
        
    }

    removeAt(position){
        if (position>=0 && position<this.length) {
            let current=this.head,
                index=0;
            if(position===0){ //é no inicio/head
                this.head=current.next;
                if(this.length===1){//a lista só tinha um elemento
                    this.tail=null;
                }else{// a lista tinha mais de um elemento
                    current.next==null;
                    this.head.previous=null;
                }
            }else if(position===(this.length-1)){ //é no fim/tail
                current=this.tail;
                this.tail= current.previous;
                current.previous=null;
                this.tail.next=null;
            }else{// é no meio
                while(index<position){
                    index++;
                    current=current.next;
                }
                current.previous.next=current.next;
                current.next.previous=current.previous;
                current.previous=current.next=null;
            }
            this.length--;
            return current.element;
        }else{
            return null;
        }

    }

}