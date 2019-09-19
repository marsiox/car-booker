interface DataType {
  id: number,
  start: number,
  end: number
}

class BookingNode {
  data: DataType
  next: BookingNode | null

  constructor(data: DataType) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  head: BookingNode | null

  constructor() {
    this.head = null
  }

  insert(data: DataType) {
    let newNode = new BookingNode(data)

    // first node
    if (!this.head) {
      this.head = newNode
      return
    }

    // find node, after which to place the new node
    let currentNode = this.head
    let prevNode = null

    while (currentNode) {
      if (currentNode.data.end === data.start) { // insert after found node
        newNode.next = currentNode.next
        currentNode.next = newNode
        return
      } else if (currentNode.data.start === data.end) { // insert before found node
        newNode.next = currentNode
        if (prevNode) {
          prevNode.next = newNode
        } else { // if prevNode is null it means we want to place the node at the begining
          this.head = newNode
        }
        return
      }

      // dafault placing a node at the end of the list
      if (currentNode.next === null) {
        currentNode.next = newNode
        return
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
  }

  toArray() {
    let output = []
    let currentNode = this.head
    while(currentNode) {
      output.push(currentNode.data.id)
      currentNode = currentNode.next
    }
    return output
  }
}

export default LinkedList
