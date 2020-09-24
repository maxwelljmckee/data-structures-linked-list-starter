// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let curr = this.head
        let prev;

        if (!this.head) {
            return undefined
        } else if(this.head === this.tail) {
            this.head = null
            this.tail = null
            this.length = 0
        } else {
            while (curr.next) {
                prev = curr
                curr = curr.next
            }

            this.tail = prev
            this.length--
            prev.next = null
            return curr
        }
        
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head, this.tail = newHead;
        }
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head, this.tail = null;
        }
        return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head;
        while (curr) {
            if (curr.value === target) return true;
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let curr = this.head;
        let counter = 0;
        while (curr) {
            if (counter === index) return curr;
            curr = curr.next;
            counter++;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (this.get(index) !== null) {
            this.get(index).value = val;
            return true;
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        const newNode = new Node(val);
        if (index === 0) {
            this.addToHead(val);
            return true;
        }
        if (index > 0 && index < this.length) {
            
            let nextInd = this.get(index)
            let prevInd = this.get(index - 1);
            prevInd.next = newNode;
            newNode.next = nextInd;
            this.length++;
            return true;
        }
        return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index === 0) this.removeHead();
        
        if (index > 0 && index < this.length) {
            let prev = this.get(index - 1);
            let next = this.get(index + 1);
            let curr = this.get(index)
            prev.next = next;
            this.length--;
            console.log(curr)
            return curr
        }
        return undefined;
    }

    // TODO: Implement the size method here
    size() {
        return this.length
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
