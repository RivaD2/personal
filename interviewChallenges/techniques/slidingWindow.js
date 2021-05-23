/*
Sliding Window Technique: 
- A method used for finding subarrays in an arr that satisfy given conditions
- Maintain a subset of items as your window and resize/move that window within a larger list
  until you find a solution
- O(n) time, space: O(1)
- I can identify Sliding Window problems amongst subarray/substring releated questions
- They usually involve arr or string challenges, if I am asked to find a segment, 
subarray etc.


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

/* Minimum size Subarray Sum
Given an array of  n positive integers, and a positive integer s,
find the minimal length of a contiguous subarray of which the sum >= s. 
If there isn't one, return 0;

 input: [2, 3, 1, 2, 4, 3], s = 7
 - The shortest section would be [4, 3], so output would be 2
 - naive approach would be nested for loops

 How to do it:
  - Create start and end pointer
      - Set both pointers at start of arr
  - Move end pointer to next spot and keep moving until I form a valid window
    [2, 3, 1, 2, 4, 3]
     s
     e
    [2, 3, 1, 2, 4, 3]
     s  e --->
     - A window is valid if elements sum to 7 or more
  - Once end pointer reaches index 3, sum = 8
     - Now that sum is larger than s, move start pointer to next index
     [2, 3, 1, 2, 4, 3]
         s     e
         - Now sum is 6, so window does not satisfy condition
         - We now move back to step two, where end pointer moves up again...
  - Repeat until solution is found
    [ 4, 3]
*/

const minArraySum = (nums, s) => {
 if(nums == null || nums.length == 0) return 0;

 let left = 0
 let right = 0;

 // Variable to hold running sum
 let sum = 0;
 // Return value, set at very large value
 let result = Number.MAX_VALUE;
 // Iteration of right pointer representing end of window
 for(right = 0; right < nums.length; right++){
   // Adding number to running sum, window increases in size
   sum += nums[right];
   // Sum exceeds s, shrink window without moving right pointer and update sum
   while(sum >= s) {
     result = Math.min(result, right + 1 - left);
     sum -= nums[left++];
   }
 }
 return (result != Number.MAX_VALUE) ? result : 0
}
console.log(minArraySum([2, 3, 1, 2, 4, 3], 7))

/*
Given an array of temperatures from a given week, calculate the average temperature for n days. 
List the average temperatures for n days for the whole week.

Input: [98.1, 99.5, 90.2, 81.2, 99.3, 94.5]
Output: [no data, no data, 95.9, 90.3, 90.2, 91.6]
n = 3

input: array of length n
output: array of length n

- for loop to iterate over temps from a given week
- if i < n, console.log or push string of 'no data'
  - if i < n - 1 (2), account for no data and 

- Use sliding window technique...
  - The window is a sum and the pointer points to first value in arr
    - As I iterate, last value is added to sum, average is taken, the first value is removed
    from the sum, and the pointer increments. This ensures averages are only from n number of days.

- This makes it so I would be going through each element in the array
  - Create three variables:
     - averageTemps to hold array of averages, the return value
     - sumOfThreeDays to hold sum of days from which average is calculated
     - pointer is the beginning of the range of the nums to be summed
  - As I iterate over arr, the temp at end of range is added to sum
    - It is then averaged and added to averageTempsArr
    - The value at beginning of range is subtracted and pointer moves up to next temp;
- return array with average temps for n days
- This solution was written to only cover if n = 3.
*/

const findAverageTemps = (arr, n) => {
  let averageTemps = [];
  let sumOfThreeDays = 0;
  let pointer = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if(i < n - 1) {
    sumOfThreeDays += arr[i];
    } 

    if(i < n) {
      averageTemps.push('no data');
    } else {
      sumOfThreeDays += arr[i];
      let averages = sumOfThreeDays / n;
      averageTemps.push(averages);
      sumOfThreeDays -= arr[pointer];
      pointer++;
    }
  }
  return averageTemps;
};

console.log(findAverageTemps([98.1, 99.5, 90.2, 81.2, 99.3, 94.5],3));

