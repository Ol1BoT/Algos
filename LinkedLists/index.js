class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value)
		this.tail = this.head
		this.length = 1
	}

	prettyPrint() {
		const arr = []
		let currNode = this.head
		while (currNode != null) {
			arr.push(currNode.value)
			currNode = currNode.next
		}
		console.log(arr)
	}

	append(value) {
		let newNode = new Node(value)

		//this.tail.next is a pointer to a node, we update that node.next value
		this.tail.next = newNode
		//this.tail gets assigned to the new node
		this.tail = newNode

		this.length++
	}

	prepend(value) {
		let newNode = new Node(value)

		//we want to hold onto the first node link information
		const holder = this.head.next
		//we assigned head to the new node
		this.head = newNode
		//head is a point to the newNode, so we update its next value to the other linked node
		this.head.next = holder
		this.length++
	}

	insert(index, value) {

		let newNode = new Node(value)

		if (index > this.length - 1) {
			this.append(value)
		}

		let currNode = this.head

		for (let counter = 0; counter < index - 1; counter++) {
			currNode = this.head.next
		}

		//we want to hold the pointer of the next node
		const holder = currNode.next
		// we set the current next pointer to the new node 
		currNode.next = newNode
		// we then update the newnode with the next pointer, to the old current node pointer
		newNode.next = holder
		this.length++
	}

	remove(index) {

		let currNode = this.head

		for (let counter = 0; counter < index - 1; counter++) {
			currNode = this.head.next
		}

		let connect = currNode.next.next
		currNode.next = connect
		this.length--
	}

}

const ll = new LinkedList(5)
ll.append(10)
ll.prepend(20)
ll.append(55)
// console.log(ll)
ll.prettyPrint()
ll.insert(2, 99)
ll.prettyPrint()
// ll.remove(1)
// ll.prettyPrint()