/*
You are given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
*/

const segmentCount = s => {
  let count = 0;
  let arrOfWordSegments = s.split(' ');

  arrOfWordSegments.forEach(word => {
    count++
  });
  return count;
};

console.log(segmentCount('Sun tan lotion is good for me, it protects me, tee hee hee'));

const countSegments = s => {
  const arrOfWordSegments = s.split(' ');
  for (let segment of arrOfWordSegments) {
    return arrOfWordSegments.length;
  }
};
console.log(countSegments('The Fith Element is amazing'))

const countStringSegments = s => {
  const arrOfWordSegments = s.split(' ');
  arrOfWordSegments.filter(word => word).length;
};
console.log(countStringSegments('Leeloo Dallas Multipass'));

const countAllTheWordSegments = s => {
  const arrOfSegments = s.split(' ');
  return arrOfSegments.reduce((acc, curr) => {
        acc += 1;
      return acc;
  },0);
};