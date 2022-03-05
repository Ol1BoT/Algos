class Node {

	constructor(value) {
		this.value = value
		this.prev = null
		this.next = null
	}
}

class MyList {
	constructor(value) {
		this.head = new Node(value)
		this.tail = this.head
		this.length = 1
	}

	append(value) {
		const newNode = new Node(value)
		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode
		this.length++
	}

	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++
	}

	pop() {
		const newTail = this.tail.prev
		this.tail = newTail
		this.tail.next = null
		this.length--
	}

}

const ll = new MyList(5)

console.log(ll)
ll.append(6)
ll.prepend(10)
ll.pop()
console.log(ll)