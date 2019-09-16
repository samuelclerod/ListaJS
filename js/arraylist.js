
class ArrayList{

    constructor(){
        this.data = [];
    }

    append(element) {
        this.data.push(element);
    }

    insert(position, element) {
        if(this.positionIsValid(position) || position==this.size()){
            this.data.splice(position, 0, element);
        }
    }
    positionIsValid(position){
        return (position >= 0 && position < this.size());
    }

    remove(element) {
        let index = this.search(element);
        if(index!=-1) return this.data.splice(index, 1);
    }

    removeAt(position){
        if(this.positionIsValid(position)){
            this.data.splice(position, 1);
        }
    }

    size(){
        return this.data.length;
    }

    show(separator='-'){
        return this.data.join(separator);
    }

    isEmpty(){
        return this.data.length===0;
    }

    getElement(position){
        if(this.positionIsValid(position))
            return this.data[position];
        return null;
    }

    search(element){
        for(let i =0 ; i<this.data.length; i++)
            if(this.data[i]==element) return i;
        return -1;
    }


}