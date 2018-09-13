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
        this.lenght++
    }

    insert(position, element){}

    removeAt(position) {}
}