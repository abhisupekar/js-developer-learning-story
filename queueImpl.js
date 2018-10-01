function Queue() {
    let collection = [];

    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (e) => {
        collection.push(e);
    }
    this.dequeue = () => {
        return collection.shift();
    }

    this.size = () => {
        return collection.length;
    }

    this.front = (e) => {
        return collection[0];
    }
    this.empty = () => {
        return (collection.length === 0);
    }
}

let queueA = new Queue();
queueA.enqueue(1);
queueA.enqueue(2);
queueA.enqueue(3);
queueA.print();
queueA.dequeue();
queueA.print();
