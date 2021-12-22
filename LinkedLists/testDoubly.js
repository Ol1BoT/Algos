class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoubleLinkedList {
	constructor(value) {
		this.head = new Node(value)
		this.tail = this.head
		this.length = 1
	}

	prettyPrint() {
		const arr = []
		let currNode = this.head
		while (currNode != null) {
			// console.log(currNode)
			arr.push(currNode.value)
			currNode = currNode.next
		}

		console.log(arr)
	}

	append(value) {
		const newNode = new Node(value)
		this.tail.next = newNode
		newNode.prev = this.tail
		this.tail = newNode
		this.length++
	}

	prepend(value) {
		const newNode = new Node(value)
		this.head.prev = newNode
		newNode.next = this.head
		this.head = newNode
		this.length++
	}

	insert(index, value) {

		if (index >= this.length - 1) {
			this.append(value)
			return
		}

		if (index <= 0) {
			this.prepend(value)
			return
		}

		const newNode = new Node(value)

		let leader = this._traverseIndex(index)
		let follower = leader.next

		newNode.prev = leader
		newNode.next = follower
		follower.prev = newNode
		leader.next = newNode
		this.length++

	}

	remove(index) {
		//CHECK INDEX

		if (index == 0) {
			let currNode = this.head
			let newHead = currNode.next
			newHead.prev = null
			this.head = newHead
			return
		}

		if (index >= this.length - 1) {
			let oneBefore = this.tail.prev
			oneBefore.next = null
			this.tail = oneBefore
			return
		}

		let leader = this._traverseIndex(index)

		let toConnect = leader.next.next

		leader.next = toConnect
		toConnect.prev = leader
		this.length--

	}

	_traverseIndex(index) {

		let currNode = this.head


		for (let counter = 0; counter < index - 1; counter++) {
			currNode = currNode.next
		}

		return currNode
	}

}

const l1 = new DoubleLinkedList(10)
l1.append(20)
l1.append(30)
l1.prepend(5)
l1.prettyPrint()
l1.insert(3, 25)
l1.prettyPrint()
console.log(l1.length)
l1.remove(4)
l1.prettyPrint()
console.log(l1)