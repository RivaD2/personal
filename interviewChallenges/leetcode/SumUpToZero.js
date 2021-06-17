/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Approach:
- I can create 'result' variable and set it to empty arr (output)
- Create a condition that if n is odd, then I can push 0 into result
  - I can see above that if n is odd, I can add 0, if even, then no need
- Use a while loop, while arr.length is less than n
  - Set index to be length of result + 1;
  - This index can help me keep track of bounds
  - Push negative index to result
- Return the result
Output: [-1,0,1]*/

const sumZero = n => {
  let result = [];
  if(n % 2 !== 0) {
    result.push(0);
  }
  while(result.length < n) {
    let indexLength =  result.length + 1;
    result.push(indexLength);
    result.push(-indexLength);
  }
  return result;
}
console.log(sumZero(3));
