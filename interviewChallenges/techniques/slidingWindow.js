/*
Sliding Window Technique: 
- A method used for finding subarrays in an arr that satisfy given conditions
- Maintain a subset of items as your window and resize/move that window within a larger list
  until you find a solution
- O(n) time, space: O(1)
- I can identify Sliding Window problems amongst subarray/substring releated questions

// Basic example of how it works

Ex 1:

Given an array of integers, find subarrays that add up to 9.
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
 - Create window for first two arr elements
    [1, 2]
 - Expand window to right
   [1, 2, 3]
 - Keep expanding [1, 2, 3, 4]
    - If elements in window are larger than 9, shrink window from left
       [2, 3, 4]


Common challenges where I can use Sliding Window:

1) Given an arr of integers, find the maximum subarray of the 
required size.


Example input: [-1, 2, 3, 1, -3, 2] Subarray size: 2
Requirements: Subarrays are contiguous
              Input size could be anything
Analysis: Input size is unlimited, so memory can blow up if not careful
          Do not pre-calculate and store all possible variations beforehand(bruteforce)
          Do not use recursion. Call stack will overflow.
          Think through all data structures that can be utilized

Brute Force: Calculate all subarrays with 2 members and store them in 
             hash table
            Iterate over hash table until I find subarray with max sum


Sliding Window/PseudoCode: O(n) time, space: O(1)
1) Start by calculating window sum starting with first two elements
2) Slide the window by one element at a time



2) Given an arr of positive integers, find the subarrays
that add up to a given number.

Sample input: [1, 7, 4, 3, 1, 2, 1, 5, 1] Desired Sum: 7
Here, the input size can be anything and there are no negative numbers

Brute Force: Find all subarrays and calculate sum and put them in a map
             Return the subarrays that add up to desired sum from map
             This takes a very long time! O(n^2) time and space

Sliding Window:
- Start by calculating window sum starting with first element
- Expand or shrink window by one element at a time
  - If sum is larger, shrink, if greater, expand
  - Here I can process each element once O(n) time and space



CHALLENGE: Given an arr of integers of size 'n', calculate maximum sum 
possible for k elements in the array.

input: [10, 30, 20, 60, 50, 40, 70] k = 2
Goal is to find subarray of 3 elements that has largest sum
The array in not sorted
*/

const maxSum = (arr, k) => {
  if(k > arr.length) return 'invalid';
  
  let total = 0;
  for(let i = 0; i < k; i++){
    // Define first window
    total +=arr[i];
  }
  let maxSumResult = total;
  // Iteration starts from kth element
  for(let i = k; i < arr.length; i++) {
    // Have to slide the window and update the value of maxSumResult
    // Difference between last value and first value
    total += arr[i] - arr[i - k];
    maxSumResult = Math.max(total, maxSumResult);
  }
  return maxSumResult;
}
console.log(maxSum([1, 5, 10, 60, 50, 30], 2))