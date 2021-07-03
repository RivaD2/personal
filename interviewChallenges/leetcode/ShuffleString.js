/*
Shuffle String:

Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.

- Create a variable 'results'
  - This will hold all the shuffled letters from each index
  - This could be done by creating a new array (new Array) or I could set
  the value to an empty string and add the values in.
  - The things I know right now are that the string length and indices are the same.
  - So I can immediately set 'result' to be indices.length or string.length
- I will split letters into arr so I can loop over each index
  - I need to keep track of the current letter (in arr)
   - Create a new variable 'indexToSwap' and set it to be the current index indices
    so I can set the letter to the proper index
  - Set result at the indexToSwap to be the value of the currentLetter
  - return result.join('') to turn arr back to string
*/

var shuffleString = (s, indices) => {
  let result = new Array(indices.length);
  let arrayOfLetters = s.split('');
 
  for(let i = 0; i < arrayOfLetters.length; i++) {
    let currentLetter = arrayOfLetters[i];
    let indexToSwap = indices[i]
    result[indexToSwap] = currentLetter;
  }
  return result.join('');
};

