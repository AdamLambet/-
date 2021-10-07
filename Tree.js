/**
 *                      root
 *                      <11>
 *               <7>            <15>
 *           <5>     <9>    <13>     <20>
 * 
 * BST: 二叉搜索树 只允许左侧节点存储比父节点小的值 右侧存储大的值 
 */

/**
 * insert(key) 树中插入一个新的键
 * search(key) 树中插入一个键，如果节点存在，则返回true。如何不存在，则返回false
 * inOrderTraverse   中序遍历遍历所有节点
 * preOrderTraverse  先序遍历遍历所有节点
 * postOrderTraverse 通过后序遍历遍历所有节点
 * max 返回树中最大的值/键
 * remove(key) 从树中移除某个键
 */

function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;
}

/**
 * insert
 */
 BinarySearchTree.prototype.insert = function(key) {
     var newNode = new Node(key);

     if (root === null) {
         root = newNode;
     } else {
         insertNode(root, newNode)
     }
 }

 var insertNode = function(node, newNode) {
     if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertNode(node.left, newNode)
        }
     } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNode(node.right, newNode)
        }
     }
 }

 var tree = new BinarySearchTree()
 tree.insert(11);

/**
 * 遍历
 */


/**
 * search 最大/最小值
 */
 BinarySearchTree.prototype.min = function() {
     return minNode(root)
 }

 BinarySearchTree.prototype.max = function() {
    return maxNode(root)
}

 var minNode = function(node) {
     if (node) {
         while(node && node.left !== null) {
             node = node.left
         }

         return node.key
     }
     return null
 }

 var maxNode = function(node) {
     if (node) {
         while(node && node.right !== null) {
             node = node.right
         }

         return node.key
     }

     return null
 }


/**
 * search 特定的数值
 */
  this.search = function(key) {
      return searchNode(root, key)
  }

  var searchNode = function(node, key) {
      if (node === null) {
          return false
      }

      if (key < node.key) {
          return searchNode(node.left, key)
      } else if (key > node.key) {
          return searchNode(node.right, key)
      } else {
          return true
      }
  }

/**
 * remove
 */


