

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}


class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}

	peek(index) {

		if (this.length - 1 < index) {
			console.log("index is larger than the stack")
			return
		}

		if (index == 0) {
			console.log(this.top)
		}

		let currNode = this.top
		for (let i = 0; i < index; i++) {
			currNode = currNode.next
		}

		console.log(currNode)


	}
	push(value) {

		const node = new Node(value)

		if (this.length === 0) {
			this.top = node
			this.bottom = node
			this.length++
			return
		}

		node.next = this.top
		this.top = node
		this.length++


	}
	pop() {

		const nextNode = this.top.next
		const popped = this.top
		this.top = nextNode
		this.length--

		return popped
	}

	prettyPrint() {

		let currNode = this.top
		while (currNode != null) {
			console.log(currNode.value)
			currNode = currNode.next
		}

	}
}

const stack = new Stack()



stack.push(1)
stack.push(5)
stack.push(20)
stack.prettyPrint()
stack.peek(2)

stack.pop()
stack.pop()
stack.prettyPrint()






