/*
  Given an integer n, return the number of trailing zeroes in n!

  Example 1:
  Input: n = 3
  Output: 0
  Explanation: 3! = 6, no trailing zero.

  Example 2:
  Input: n = 5
  Output: 1
  Explanation: 5! = 120, one trailing zero.

 Pseudocode:
 - What is a factorial?
    - It is what I get when I multiply every num from 1 through the num
    - 5! = 120 (1 * 2 * 3 * 4 * 5)
    - 10 doesn't appear anywhere, but I can take 2 and * by 5
      - In 120, I have 2 * 5 and count number of 5's 
      - I can create a variable called 'fives' and set it to 0;
  - While n >= 5
    - I have to take n and divide it by 5 but also
      consider remainders here
      - I can use Math.floor(n / 5)
      - If n is 10, divide it by 5 (5's would be 2)
  - I can use Math.floor on n to cover other factorials have multiple 5's
    - For example in 25, there would be 6 5's.. so factors
      have to also be broken down by 5's;
*/

const trailingZeros = n => {
  let fives = 0;
  //Increment when I get to 5
  while(n >= 5){
    //Divide by 5 and add to variable
    fives += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return fives;
}