/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //if list is empty
    if (!this.head) {
      this.head = new Node(val)
      this.tail = this.head
    } else {
      this.tail.next = new Node(val)
      this.tail = this.tail.next
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val)
      this.tail = this.head
    } else {
      let newNode = new Node(val)
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.tail) {
      //empty array, return null
      return null
    } else {
      //is there only 1 element?
      if (this.length == 1) {
        const toReturn = this.head.val
        this.head = null
        this.tail = null
        this.length--
        return toReturn
      } else {
        let currentVal = this.head
        while (currentVal.next) {
          if (currentVal.next == this.tail) {
            const toReturn = this.tail
            this.tail = currentVal
            this.tail.next = null
            this.length--
            return toReturn.val
          }
          currentVal = currentVal.next
        }
      }
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length > 0) {
      if (this.length == 1) {
        const toReturn = this.head.val
        this.head = null
        this.tail = null
        this.length--
        return toReturn
      } else {
        const toReturn = this.head.val
        this.head = this.head.next
        this.length--
        return toReturn
      }
    } else {
      return null
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentVal = this.head
    for (let i = 0; i <= idx; i++) {
      if (i == idx) {
        return currentVal.val
      }
      currentVal = currentVal.next
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentVal = this.head
    for (let i = 0; i <= idx; i++) {
      if (i == idx) {
        return currentVal.val = val
      }
      currentVal = currentVal.next
    }
  }


  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //is list empty
    if (!this.head) {
      this.head = new Node(val)
      this.tail = this.head
      this.length++
    } else {
      let currentVal = this.head
      for (let i = 0; i < idx; i++) {
        if (i + 1 == idx || this.tail == currentVal) {
          //this is node b4 idx

          let newNode = new Node(val)
          newNode.next = currentVal.next
          if (!currentVal.next) {
            this.tail = newNode
          }
          currentVal.next = newNode
          this.length++
        }
        currentVal = currentVal.next
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //if this is the only item
    if (this.length == 1) {
      const toReturn = this.head.val
      this.head = null
      this.tail = null
      this.length--
      return toReturn
    } else {
      //there is more than 1 item
      let currentVal = this.head
      for (let i = 0; i <= idx; i++) {
        if (i + 1 == idx) {
          if (currentVal.next == this.tail) {
            this.tail = currentVal
          } else {
            currentVal.next = currentVal.next.next
          }
          this.length--
          return currentVal.val
        }
        currentVal = currentVal.next
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0
    } else {
      //if there is only one item
      if (this.length == 1) {
        return this.head.val
      } else {
        let currentVal = this.head
        let runningTotal = 0
        let numNumbers = 0
        while (currentVal.next) {
          runningTotal += currentVal.val
          numNumbers++
          currentVal = currentVal.next

        }
        //this doesn't include the last one, so we add the last one
        return (runningTotal + this.tail.val) / (numNumbers + 1)

      }

    }
  }
}

module.exports = LinkedList;
