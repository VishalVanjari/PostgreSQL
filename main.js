class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null; // Initialize head to null
  }
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    console.log("Data is append");
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new SingleLinkedList();
list.append(25);
list.append(50);
list.append(75);
list.print();


