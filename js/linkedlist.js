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

    }

    removeAt(position) {

    }

    size() {
        return this.length;
    }

    show(separator = '-') {

    }

    isEmpty() {
        return this.head==null;
    }

    getElement(position) {

    }

    search(element) {

    }
}