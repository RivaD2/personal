
const preOrder = (root) => {
    if(!root){
        return;
    }
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
    // If I'm right here, I know I'm going up the tree
}
const inOrder = root => {
    if(!root){
        return;
    }
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}
const postOrder = root => {
    if(!root){
        return;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}