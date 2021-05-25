/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321 */

const reverseInt = x => parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
console.log(reverseInt(-123));

const reverse = x => {
  const numToString = Math.abs(x).toString();
  let newString = '';
  
  for(let i = numToString.length - 1; i >= 0; i--) {
    newString += numToString[i];
    console.log('in loop newString', newString)
  }
  return newString * Math.sign(x)
};
console.log(reverse(-123));

/*
  Given an integer, determine whether it is a palindrome.
  
  Ex: 12 ---> 21
  Ex: 123 ----> 321
  
  input: int
  output: boolean, true if palindrome
  
  1. change int to string using toString..
     123 ---> '123'
  2. Loop through the ol string and reverse it...
      - save logic to split string and reverse to variable called splitAndReversed = str.split('').reverse().join('');
      ['3', '2', '1']
  3. Compare two strings...if they are not equal return false
     
*/

const isPalindromeString = int => {
  let stringInt = int.toString();
  console.log('stringInt is a now', stringInt);
  let splitAndReversedString = stringInt.split('').reverse().join('');
  if(splitAndReversedString !== stringInt) {
    return false;
  } 
  return true;
}

console.log(isPalindromeString(1001001));