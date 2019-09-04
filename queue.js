class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class queuee {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;

    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    var temp = this.first;
    this.first = this.first.next;
    temp.next = null;

    return temp;
  }
}
