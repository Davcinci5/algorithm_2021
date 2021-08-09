//Check if an expression consisting of parenthesis, square brackets and curly brackets is balanced.

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinaryTree {

//     constructor() {
//       this.root = null;
//     }
  
//     insertion(nodeTemp = this.root, value){
//         if(nodeTemp === null){
//             this.root = new Node(value);
//             return;
//         }
//         const queue = [];
//         queue.push(nodeTemp);

//         while(queue.length !== 0){
//             nodeTemp = queue.shift();

//             if(nodeTemp.left == null){
//                 nodeTemp.left = new Node(value);
//                 break
//             }else
//         }
        

//     }
//     addNodes(arr, node = this.root, i = 0) {
//       if (i < arr.length) {
//         let temp = new Node(arr[i]);
//         node = temp;
//         console.log({node});
//         node.left = this.addNodes(arr, node.left, 2 * i + 1);
//         node.right = this.addNodes(arr, node.right, 2 * i + 2);
//       }
//       return node;
//     }
//   }
  
//   const bTree = new BinaryTree();
//   bTree.addNodes([1, 2, 3, 4, 5]);
//   console.log({bTree});

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    addNodes(arr, node = this.root, i = 0) {
      if (i < arr.length) {
          let temp = new Node(arr[i]);
        if(this.root === null) {
            this.root = temp;
        }
        node = temp;
        node.left = this.addNodes(arr, node.left, 2 * i + 1);
        node.right = this.addNodes(arr, node.right, 2 * i + 2);
      }
      return node;
    }
  }
  
  const bTree = new BinaryTree();
  bTree.addNodes([1, 2, 3, 4, 5]);
  console.log(bTree);



//   addNodes(arr, node = this.root, i = 0) {
//     if (i < arr.length) {
//       let temp = new Node(arr[i]);
//       node = temp;
//       node.left = this.addNodes(arr, node.left, 2 * i + 1);
//       node.right = this.addNodes(arr, node.right, 2 * i + 2);
//     }
//     return node;
//   }
// }