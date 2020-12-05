// Credit to https://dev.to/zchtodd/binary-tree-interview-questions-hpi for solutions
class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right
    }
    insert(tree) {
        if(tree.data >= this.data) {
            this.insertRight(tree);
        } else {
            this.insertLeft(tree);
        }
    }
    insertLeft(tree) {
        if(this.left) {
            this.left.insert(tree) 
        } else {
            this.left = tree;
        }
    }
    insertRight(tree) {
        if(this.right) {
            this.right.insert(tree)
        } else {
            this.right = tree;
        }
    }
}

t = new Tree('b');
t.insert(new Tree('a'));
t.insert(new Tree('c'));
t.insert(new Tree('d'));
console.log(t);

const treeBuild = items => {
    let root = null;
    let queue = [];
    let count = 0;

    for(let i = 0; i < items.length; i++ ) {
        let node = items[i] !== null ? new Tree(items[i]) : null;
        if(!root) {
            root = node;
        } else {
            if(!count) {
                queue[0].left = node;
                count++
            } else {
                queue[0].right = node;
                count = 0;
                queue.shift();
            }
        }
        if(node) 
        queue.push(node);
    } 
    return root;
}

// Determine max depth of binary Tree
const maxDepth = root => {
    if(!root) {
        // no children, recursion stops
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
console.log(maxDepth(treeBuild([1, 2, 2, null, null, 3, null])));

// Invert Tree Challenge: invert a tree so left tree looks like right tree
// Starting at root, invert Tree on the left node which would call invertTree once more before returning itself
// Same would happen on right node
// At that point, everything beneath root would be swapped
// Lastly, swap child references

const invertTree =  root => {
    if(!root) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}
console.log(invertTree(treeBuild([1, 2, 3, 4, 5, 6, 7])))