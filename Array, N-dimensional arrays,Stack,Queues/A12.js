class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
    set link(node){
        this.next = node;
    }
    get value() {
        return this.data;
    }
}

class CircularQueue {
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enQueue(value){
        let temp = new Node(value);
        if (this.front === null)
            this.front = temp;
        else
            this.rear.link = temp;
  
        this.rear = temp;
        this.rear.link = this.front; 
    }
    deQueue() {
        if (this.front == null) {
            console.log("Queue is empty");
            return null;
        }
  
        // If this is the last node to be deleted
        let value; // Value to be dequeued
        if (this.front == this.rear) {
            value = this.front.value;
            this.front = null;
            this.rear = null;
        }
        else // There are more than one nodes
        {
            let temp = this.front;
            value = temp.value;
            this.front = this.front.next;
            this.rear.link = this.front;
        }
  
        return value;
    }
}

module.exports = CircularQueue;