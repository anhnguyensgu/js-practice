class Queue {
    constructor(){
        this.size = 0;
        this.elements = [];
    } 
    enqueue(element){
      this.elements.push(element);
      this.size = this.elements.length;
    }
}

var q = new Queue();
q.enqueue(1);
console.log(q.size);
q.enqueue(100);
console.log(q.size);