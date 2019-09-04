class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 class stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }
  pop() {
    if (!this.first) {
      return undefined;
    }
    var temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = temp.next;
    temp.next = null;
    this.length--;
    return temp.val;
  }
}
