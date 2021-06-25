/*
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

- Break down number into digits, 1 and 9
1 squared plus 9 squared is 82
  - break down 82 to 8 and 2
    -8 squared plus 2 squared is 68
      - break 68 down etc.


Example 2:
Input: n = 2
Output: false

-2 can not be broken down

Pseudocode:
- First, I need to break the number down into its digits
- I need to use some sort of storage structure to hold sums I've already seen
  - As I loop, I could store the sums in a Set (a value can only occur once which is what we want)
  I don't want to get stuck in endless loop

- First get number in the one's place (if it is 19, I just the 9) and I can square it/store it
  - I can use the % operator to help here
- Remove the previous number form the mix and square the remaining num (1 using prev example of 19)
  - I can use Math.floor(num /10) which would give me the one.
*/

const happyNumber = num => {
  const previousSums = new Set();

  while(num !== 1) {
    let currentSum = 0;
    while (num > 0) {
      // get number in 1s place, square it and add to acc (the currentSum)
      currentSum += (num % 10) * (num % 10);
      // Continue to break it down till it is is no longer > zero, then break out of loop
      num = Math.floor(num / 10);
    }

    // If set does not have current sum, add it to set
    if(!previousSums.has(currentSum)) {
      previousSums.add(currentSum);
      // If this at some point does equal 1, I will break out of loop
      num = currentSum;
    } else {
      return false;
    }
  }
  return true;
}