/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
The number of elements initialized in nums1 and nums2 are m and n respectively. 
You may assume that nums1 has a size equal to m + n such that it has enough space 
to hold additional elements from nums2.


Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
*/

/*
 - I can use two pointers: 
- Start at end of first array, and end of second arr
- Get reference to last intialized elements in both arrays
  - Iterate over both arrays backwards
    - If the second array is ever less than 0, then all elements have been added to first
  - I have to compare first and second elements and see which one is bigger
       - If element in first array is larger than in second,add that current element to first
         - pointer first--
       -If element in first is < than in second, then set current element to the number in second
         -pointer second--
  - 
  */

  const merge = (nums1, m, nums2, n) => {
    // Get reference to last initialized variable
    let first = m - 1;
    let second = n - 1;

    // Iterate over both arrays backward
    for(let i = m + n - 1; i >= 0; i--) {
      if(second < 0){
        break;
      }
      if(nums1[first] > nums2[second]) {
        nums1[i] = nums1[first];
        first--
      } else {
        nums1[i] = nums2[second];
        second--;
      }
    }
  }
   