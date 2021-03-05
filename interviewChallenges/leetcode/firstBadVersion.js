'use strict';
/*
You are a product manager and currently leading a team to develop a 
new product. Unfortunately, the latest version of your product fails 
the quality check. 

Since each version is developed based on the previous version, 
all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out 
the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether
 version is bad. 
Implement a function to find the first bad version. 
You should minimize the number of calls to the API.

Example 1:
Input: n = 5, bad = 4
Output: 4

Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1
*/

/*
 -- A binary search could be used here 
    - versions would be in sorted order
 - We narrow the amount of calls we have to do 
 O(log N)
*/

let solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1;
    let end = n;

    while(start <= end) {
      let mid = Math.floor((start + end) /2);
      if(isBadVersion(mid)) {
        // Bad version found, look left for more bads
        end = mid - 1;
      } else {
        // If bad version is found already, look to the right
        start = mid + 1;
      }
    }
    // When start is > end, we know bad version is found
    return start;
  };
};