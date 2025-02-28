class Node {
    constructor(value) {
      this.value = value;
      this.next = null; 
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; 
      this.size = 0;    
    }
  
    // Add a node to the end
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Print all elements
    print() {
      let current = this.head;
      let output = "";
      while (current) {
        output += current.value + " → ";
        current = current.next;
      }
      console.log(output + "null");
    }
  }
  
  // Create a linked list and add elements
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.print()
  