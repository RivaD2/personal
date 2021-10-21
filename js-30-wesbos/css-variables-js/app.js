// JS to update variables

/*
  Select all inputs so when they change, I can update css variables
  which will update colors on screen
*/
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Get values / what is suffix of value?
  // Spacing and values have data-sizing attr in html
  const suffix = this.dataset.sizing || '' ;
  // select variable by selecting root and set property of base, blur, spacing
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

/*
 I have to listen for change event on every input and when it is called, use handleUpdate()
 Learned querySelectorAll gives me nodeList
 NodeList is not an array, but is like an array
 To get an array, I can use Array.from() like I did in other files/challenges
 Or, I can just use forEach

*/
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
