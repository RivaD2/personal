'use strict'

/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 
Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

const strStr = (haystack, needle) => {
  if(needle.length === 0) return 0;
  if(needle === '') return 0;

  for(let i = 0; i <= haystack.length - needle.length; i++) {
    if(needle === haystack.substring(i,i + needle.length)){
      return i;
    }
  }
  return -1;
}


const stringSearch = (haystack, needle) => {
  for(let i = 0; i <haystack.length; i++) {
    for(let j = 0; j < needle.length; j++){
      if(haystack[i + j] !== needle[j]) break;
      if(j + 1 === needle.length) return i;
    }
  }
  return -1;
}

