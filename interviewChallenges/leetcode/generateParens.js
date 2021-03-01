/*Given n pairs of parentheses, write a function to generate all combinations of 
well-formed parentheses. (there is always an open and a closed for open)

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

/* What tools can I use to generate all possibilites?
  - Recursion?
  - Create an empty array 
  - Write a function to generate all combnations
*/

const generateParens = n => {
  const solution =[];
  const generateCombinations = (leftParens, rightParens, partial) => {
    //base case
    // If incomplete parens combo
    if(leftParens > rightParens) return;
    if(!leftParens && !rightParens) solution.push(partial);

    if(leftParens > 0) generateCombinations(leftParens - 1, rightParens, partial + '(');
    if(rightParens > 0) generateCombinations(leftParens, rightParens - 1,partial + ')' );
  }
  generateCombinations(n, n, '');
  return solution;
}