const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	rootNode = null

  	root() {
    	return this.rootNode
  	}

  	add(data) {
		const node = {data: data, left: null, right: null};

		if(!this.rootNode) {
			this.rootNode = node;
			return
		}

		let current = this.rootNode;
		while(true) {
			if(data < current.data) {
				if(current.left) {
					current = current.left;
					continue
				}

				current.left = node;
				return

			} else if(data > current.data) {
				if(current.right) {
					current = current.right;
					continue
				}

				current.right = node;
				return

			} else return
		}
  	}

  	has(data) {
		if(!this.rootNode) {
			return false
		}

		let current = this.rootNode;

		while(true) {
			if(current.data === data) {
				return true

			} else if(data < current.data) {
				if(current.left) {
					current = current.left;
					continue
				}

				return false

			} else {
				if(current.right) {
					current = current.right;
					continue
				}

				return false
			}
		}
  	}

  	find(data) {
		if(!this.rootNode) {
			return null
		}

		let current = this.rootNode;

		while(true) {
			if(current.data === data) {
				return current

			} else if(data < current.data) {
				if(current.left) {
					current = current.left;
					continue
				}

				return null

			} else {
				if(current.right) {
					current = current.right;
					continue
				}

				return null
			}
		}
  	}

  	remove(data) {
		const removeNode = (node, data) => {
			if(!node) {
			  	return null;
			}
	  
			if(data === node.data) {
			  	if (!node.left && !node.right) {
					return null;
			  	}
	  
			  	if(!node.left) {
					return node.right;
			  	}
	  
			  	if(!node.right) {
					return node.left;
			  	}
	  
			  	let tempNode = node.right;
			  	let parentNode = node;
	  
			  	while(tempNode.left) {
					parentNode = tempNode;
					tempNode = tempNode.left;
			  	}
	  
			  	node.data = tempNode.data;
			  	if(parentNode === node) {
					parentNode.right = tempNode.right;

			  	} else {
					parentNode.left = tempNode.right;
			  	}

			  	return node;

			} else if(data < node.data) {
			  	node.left = removeNode(node.left, data);
			  	return node;
			} else {
			  	node.right = removeNode(node.right, data);
			  	return node;
			}
		};
	  
		this.rootNode = removeNode(this.rootNode, data);
  	}

  	min() {
		if(!this.rootNode) {
			return null;
		}
		
		let current = this.rootNode;
		while(true) {
			if(current.left) {
				current = current.left;
				continue
			}

			return current.data
		}
  	}

  	max() {
		if(!this.rootNode) {
			return null;
		}
		
		let current = this.rootNode;
		while(true) {
			if(current.right) {
				current = current.right;
				continue
			}

			return current.data
		}
  	}
}

module.exports = {
  BinarySearchTree
};