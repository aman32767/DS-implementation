class node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //revove from last
  pop() {
    if (!this.head) {
      return undefined;
    }
    var popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }
    this.length--;
    return popNode;
  }

  //shift

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    var shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }

    this.length--;
    return shifted;
  }
  //unshift
  unshift(val) {
    var newNode = new node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  //get
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    var current = this.head;

    var count = 0;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }

  //set
  set(index, val) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      var setAt = this.get(index);
      setAt.val = val;
    }
    return true;
  }

  // insert
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  //delete at specific index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    var deleted = this.get(index);
    deleted.prev.next = deleted.next;
    deleted.next.prev = deleted.prev;
    deleted.next = null;
    deleted.prev = null;

    this.length--;
    return true;
  }
  //reverse
  reverse() {
    if (this.length === 0) {
      return undefined;
    }
    var temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    var prev = null;
    var current = this.tail;
    while (current) {
      current.next = prev;
      prev = current;
      current = current.next;
      prev.prev = current;
    }
    return true;
  }
}
