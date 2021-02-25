/*Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:
// Odd num as boundary
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
// even num as boundary
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9]

*/


// As long as one boundary is odd, divide difference by 2 plus 1
// If both are even, divide difference by 2
const countOdds = (low, high) => {
  if(low % 2 == 0 && high % 2 == 0) {
    return (high - low)/ 2;
  }
  return (high - low) / 2 + 1;
}
console.log(countOdds(2, 10));