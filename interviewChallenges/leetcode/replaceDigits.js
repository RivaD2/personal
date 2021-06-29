/*
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

 
Example 1:

Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

Pseudocode:

- I know that I need to replace every EVEN positioned char with the character s[i] positions
ahead of the character before
- I need to get the preceding char in alphabet then it advance it by s[i] position, then get
the character at THAT position
- First create a variable 'arrOfChars' and split the input string
- Loop through the input string starting at index 1
   - I need to loop through odd indices and increment i by 2, this
   way I do not visit even indices.
- set the current position to the charCodeAt() previous previous position PLUS the current digit
  - use String.fromCharcode() method to return a string from the above sequence
- join the arrOfChars again to turn it back to string
*/

const replaceDigits = string => {
 let arrOfChars = s.split('');

 for(let i = 1; i < s.length; i += 2) {
    arrOfChars[i] = String.fromCharCode(arrOfChars[i - 1].charCodeAt() + (+ arrOfChars[i]));
 }
 return arrOfChars.join('');
}