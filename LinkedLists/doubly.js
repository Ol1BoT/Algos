
class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
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

		const prev = this.tail
		//this.tail.next is a pointer to a node, we update that node.next value
		this.tail.next = newNode
		//this.tail gets assigned to the new node
		this.tail = newNode
		this.tail.prev = prev

		this.length++
	}

	prepend(value) {
		let newNode = new Node(value)

		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++

	}

	insert(index, value) {

		let newNode = new Node(value)

		if (index > this.length - 1) {
			this.append(value)
			return
		}

		if (index == 0) {
			this.prepend(value)
			return
		}

		let currNode = this.head

		for (let counter = 0; counter < index - 1; counter++) {
			currNode = currNode.next
		}

		let follower = leader.next
		newNode.prev = leader
		newNode.next = follower
		leader.next = newNode
		follower.prev = newNode
		this.length++


		// newNode.next = currNode
		// newNode.prev = currNode.prev
		// currNode.prev = newNode
		// currNode = newNode


		//we want to hold the pointer of the next node
		// const holder = currNode.next
		// we set the current next pointer to the new node 
		// currNode.next = newNode
		// we then update the newnode with the next pointer, to the old current node pointer
		// newNode.next = holder
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

	//COULD USE THIS 
	traverseToIndex(index) {

		let currNode = this.head

		for (let counter = 0; counter < index; counter++) {
			currNode = this.head.next
		}

		return currNode

	}

}

const ll = new LinkedList(5)
ll.append(10)
ll.prepend(20)
// ll.append(55)
// console.log(ll)
ll.prettyPrint()
ll.insert(0, 99)
ll.prettyPrint()
  // ll.remove(1)
  // ll.prettyPrint()
