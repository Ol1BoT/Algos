//FROM MEMORY
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
		let curNode = this.head
		const arr = []
		while (curNode != null) {
			arr.push(curNode.value)
			curNode = curNode.next
		}
		console.log(arr)
	}

	append(value) {
		let newNode = new Node(value)

		this.tail.next = newNode
		this.tail = newNode
		this.length++
	}

	prepend(value) {
		let newNode = new Node(value)

		let holder = this.head
		this.head = newNode
		newNode.next = holder
		this.length++
	}

	insert(index, value) {
		//HAVE TO REMEMBER THE INDEX LOOP GETS THE NODE BEFORE THE ONE YOU WANT TO REMOVE (SAME INSERT)
		const newNode = new Node(value)

		if (index > this.length) {
			this.append(value)
		}

		if (index <= 0) {
			this.prepend(value)
		}
		let currNode = this.head

		for (let counter = 0; counter < index - 1; counter++) {
			currNode = currNode.next
		}

		let follower = currNode.next

		newNode.next = follower
		currNode.next = newNode
		currNode = newNode
		this.length++
	}

	remove(index) {
		//ONLY CHEATED ON REMOVE -- HAVE TO REMEMBER THE INDEX LOOP GETS THE NODE BEFORE THE ONE YOU WANT TO REMOVE (SAME INSERT)
		let currNode = this.head

		for (let counter = 0; counter < index - 1; counter++) {
			currNode = currNode.next
		}

		let follower = currNode.next.next

		currNode.next = follower

		this.length--

	}

}

const ll = new LinkedList(5)
ll.append(10)
ll.prepend(6)
ll.append(55)
ll.prettyPrint()
ll.insert(2, 99)
ll.prettyPrint()
ll.remove(2)
ll.prettyPrint()