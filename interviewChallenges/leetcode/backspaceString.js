/*
Backspace String Compare
Given two strings s and t, return true if they are equal when both are typed into empty text editors.
 '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Pseudocode:
 - Looking at examples, I can see backspace could work like pop() and adding letters is like push()
 - I just need to remember the last thing I've seen! The most recently typed thing.
 - I can use an array as a stack of sorts.
 - I can create a helper function for this
    - Pass in an a param as 'letters' to the function
    - set 'result' variable to hold letters that are typed in
    - loop through the letters
       - if one of the letters  === '#', then pop it off the result arr
       - else I just push a letter
    - I can then join the result
- Finally, I can invoke the function, passing in S and T as args, and compare them to 
see if they are the same;

time: O(n)
space: O(n)
*/

const backspaceCompare = (s, t) => {
  const charactersTyped = letters => {
    let result = [];
    for (let letter of letters) {
      if (letter === '#') {
        result.pop();
      } else {
        result.push(letter);
      }
    }
    return result.join();
  }
  return charactersTyped(s) === charactersTyped(t);
};
