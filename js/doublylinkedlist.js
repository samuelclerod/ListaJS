class DoublyLinkedList extends LinkedList{
    constructor(){
        super();
        this.tail = null;
    }
    
    append(element){
        let node = new Node(element);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.tail.next=node;
            node.previous=this.tail;
        }
        this.tail=node;
        this.length++
    }

    insert(position, element){
        if(position>=0 && position<=this.length){
            let node = new Node(element),
                current = this.head,
                index=0;
            if(position===0){
                if(!this.head){
                    this.head=this.tail=node;
                }else{
                    node.next=this.head;
                    this.head.previous=node;
                    this.head = node;
                }
            }else if(position===this.length){
                node.previous = this.tail;
                this.tail.next = node;
                this.tail=node;
            }else{
                while(index<position){
                    index++
                    current=current.next;
                }
                current.previous.next=node;
                node.previous=current.previous;
                current.previous=node;
                node.next = current;
            }
            this.length++
            return true;
        }
        return false;
    }

    removeAt(position) {
        if(position>=0 && position<this.length){
            let index=0,
                current=this.head;
            if(position==0){
                if(this.length==1){
                    this.head=this.tail=null;
                }else{
                    this.head=current.next;
                    this.head.previous=null;
                    current.next=null;
                }
            }else if(position==this.length){

            }else{

            }
            this.length--
            return current.element;//substituir
        }
        return null;
    }
}