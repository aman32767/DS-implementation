class binaryHeap {
  constructor() {
    this.value = [];
  }
  enqueue(val, priority) {
    var newNode = new node(val, priority);
    this.value.push(newNode);
    var index = this.value.length - 1;
    const element = this.value[index];

    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      var parent = this.value[parentIndex];
      if (element.priority >= parent.priority) break;
      this.value[index] = parent;
      this.value[parentIndex] = element;
      index = parentIndex;
    }
    return this.value;
  }

 dequeue() {
    var max = this.value[0];
    var end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    var length = this.value.length;
    const element = this.value[0];
    while (true) {
      var leftchildindex = 2 * idx + 1;
      var rightchildindex = 2 * idx + 2;
      var leftchild, rightchild;
      var swap = null;
      if (leftchildindex < length) {
        leftchild = this.value[leftchildindex];
        if (leftchild.priority < element.priority) {
          swap = leftchildindex;
        }
      }
      if (rightchildindex < length) {
        rightchild = this.value[rightchildindex];
        if (
          (swap === null && rightchild.priority < element.priority) ||
          (swap !== null && rightchild.priority < leftchild.priority)
        ) {
          swap = rightchildindex;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}
class node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
