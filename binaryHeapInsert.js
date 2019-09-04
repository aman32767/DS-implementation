class binaryHeap {
  constructor() {
    this.val = [55, 39, 41, 18, 27, 12, 33];
  }
  insert(val) {
    this.val.push(val);
    var index = this.val.length - 1;
    const element = this.val[index];
    while (index > 0) {
      var parentindex = Math.floor((index - 1) / 2);
      var parent = this.val[parentindex];
      if (element < parent) {
        break;
      } else {
        this.val[parentindex] = element;
        this.val[index] = parent;
        index = parentindex;
      }
    }
    return this.val;
  }
  //Exrtact max
  extractMax() {
    var max = this.val[0];
    var end = this.val.pop();
    this.val[0] = end;

    this.sinkDown();

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.val.length;
    const element = this.val[0];
    while (true) {
      var leftchildindex = 2 * idx + 1;
      var rightchildindex = 2 * idx + 2;
      let leftchild, rightchild;
      let swap = null;
      if (leftchildindex < length) {
        leftchild = this.val[leftchildindex];
        if (element < leftchild) {
          swap = leftchildindex;
        }
      }
      if (rightchildindex < length) {
        rightchild = this.val[rightchildindex];
        if (
          (element < rightchild && swap === null) ||
          (swap !== null && leftchild < rightchild)
        ) {
          swap = rightchildindex;
        }
      }
      if (swap === null) break;
      this.val[idx] = this.val[swap];
      this.val[swap] = element;
      idx = swap;
    }
  }
}
