class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //push value
  push(val) {
    var newNode = new node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //traverse the list
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  //delete the last item
  pop() {
    var current = this.head;
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current.val;
  }

  //add item at begining
  unshift(val) {
    var newNode = new node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //return value at a specific index
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    var current = this.head;
    var count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  //replace item
  set(index, val) {
    var found = this.get(index);
    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }

  // insert
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new node(val);
    var prev = this.get(index - 1);
    var current = prev.next;
    prev.next = newNode;
    newNode.next = current;
    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    var prev = this.get(index - 1);
    var current = prev.next;
    prev.next = current.next;
    this.length--;
    return true;
  }
  //reverse
  reverse() {
    var temp;
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    var current = this.tail;
    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
console.log("welcome");
