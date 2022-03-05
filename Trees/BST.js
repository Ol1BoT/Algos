class Node {

	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}

}

class BST {
	constructor() {
		this.root = null
	}

	insert(value) {
		const newNode = new Node(value)
		if (this.root === null) {
			this.root = newNode
			return
		}
		if (newNode.value == this.root.value) {
			return
		}
		let currNode = this.root

		let done = false

		while (!done) {

			if (newNode.value > currNode.value) {
				if (currNode.right === null) {
					currNode.right = newNode
					break
				}
				currNode = currNode.right
			}
			if (newNode.value < currNode.value) {

				if (currNode.left === null) {
					currNode.left = newNode
					break
				}
				currNode = currNode.left
			}
		}

	}
	lookup(value) {

	}
}

const tree = new BST()

tree.insert(5)
tree.insert(20)
tree.insert(21)
tree.insert(4)
console.log(tree)