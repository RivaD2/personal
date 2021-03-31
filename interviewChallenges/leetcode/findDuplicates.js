/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

- Ok, so what makes this a medium level of difficulty? The O(n) runtime!
  - n is length of the array so I wouldn't exceed the length of arr
- I can use an object to hold values or an array 

  The steps:
- Create a variable called 'duplicates' and set to empty arr to hold duplicates 
- Create a variable called 'compare 'that will hold elements I have pushed in as I terate
- Iterate through the arr
  - As I iterate, IF number is NOT in the compare array,
    I will push it to compare. 
    - Else, push it into dupes
- Return dupes
*/

const findDuplicates = arr => {
 let duplicates = [];
 let compare = [];

 for (let num of arr) {
   if(!compare.includes(num)) {
     compare.push(num);
   } else {
     duplicates.push(num)
   }
 }
 return duplicates;
}
console.log(findDuplicates([4, 2, 2, 4, 5, 6, 8, 8]));

/*Here is another way to do this, but it works a bit faster
  using an object and array (again), to hold duplicates*/
const findDupes = arr => {
 let storage = {};
 let duplicates = [];

 for(let num of arr) {
   storage[num] = storage[num] + 1 || 1;
 }
 
 for(let num in storage){
   if(storage[num] > 1){
     duplicates.push(num);
   }
 }
 return duplicates;
}

console.log(findDupes([4, 2, 2, 4, 5, 6, 8, 8]));