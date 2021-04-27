/*
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:
Input: n = 27
Output: true

Example 2:
Input: n = 0
Output: false

Pseudocode:
 - I can use a while loop to say 'while n % 3 === 0'
   - But how should I handle 0's?
     - If n is strictly equal to 0, then I can return false;
   - divide n by three/shrink it 
     - n = n/3 or n /= 3
  - If n is not power of three, return n === 1
*/

//0(log(N) time, space: 0(1)
const powerOfThree = n => {
  if(n === 0) return false;
  while(n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}