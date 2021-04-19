/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 
- Using the two pointer technique is ideal for this challenge
- I can also use a Set to get the unique values
- Intersection just means, "which elements are shared between the two arrays?"
  Ex: [4, 1, 4, 7, 4], arr2: [7, 4, 8, 6, 4, 7, 4]
   output: [4, 7]

1. Iterate over first arr and  add elements to a Set from first arr 
   - set = 4, 1, 7
(I can't just iterate over the second and add to same set...I don't want duplicates)
2. Create a new set for ONLY common elements, and iterate over second arr
   - Is 7 in the original set? it is? Ok, add it to the second set.
   - Is 4 in the original set? It is? Ok, add it to the set.
   (If an element is not in original set, then I don't add it into second set)
3. At this point, I have two sets, elements that are common between two arrays
4. Convert the set to an arr using array.from() method
5. Return arr

*/

const intersection = (nums1, nums2) => {
  let firstSet = new Set();
  // getting all unique elements from nums1
  for(let element of nums1){
    firstSet.add(element);
  }

  let secondSet = new Set();
  // Iterating over second arr and see if elements are in first set
  // If so, I will add the element to the second set
  for(let element of nums2) {
    if(firstSet.has(element)) {
      secondSet.add(element);
    };
  }
  // turn set into arr
  return Array.from(secondSet);
}
console.log(intersection([1,2,2,1], [2,2]));

// Another way to solve it (my own way without sets)
const arrayIntersection = (nums1, nums2) => {
  let storageOne = {};
  let result = [];

  for(let num of nums1){
    storageOne[num] = storageOne[num] + 1 || 1;
    if(storageOne[num] > 1) result.push(num);
  }

  let storageTwo = {};
  for(let num of nums2) {
    storageTwo[num] = storageTwo[num] + 1 || 1;
    if(storageTwo[num] === storageOne[num]) {
      result.push(num);
    }
  }
  return result;
}
console.log(arrayIntersection([1,2,2,1], [2,2]));
