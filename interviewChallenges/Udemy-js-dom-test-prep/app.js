// Review # 1 querySelector: select elements from HTML and change background color

document.querySelector('.first span').style.backgroundColor = 'blue';
document.querySelector('#myID').style.backgroundColor = 'yellow';
document.querySelector('li:first-child').style.backgroundColor = 'orange';
document.querySelector('li:last-child').style.backgroundColor='green';

// Review # 2 Multiple Element Selection:
// Select a element group with more than one element from the HTML and update text content

let elementList = document.getElementsByClassName('myClass');
elementList = document.getElementsByTagName('span');
elementList = document.querySelectorAll('span');
elementList = document.querySelectorAll('.first');

for (let i = 0; i < elementList.length; i++) {
  let element = elementList[i];
  elementList[i].textContent = (i + 1) + 'Updated';
  console.log('element', element);
}

elementList.forEach((element, idx) => {
  element.textContent = `${idx}: Updated`
});


/*
Review # 3 Element Manipulation
- Update all list items with ids in sequence and content with count.
- Get class attribute output to console
- Remove first div with class of pickme
*/
const tempItem = document.querySelector('h1');
tempItem.innerHTML = "Well Hello There!"
tempItem.id = "test-id";

const finalText = document.querySelector('h4');
finalText.setAttribute('class', 'final-text');
const finalTextAttr = finalText.getAttribute('class');

const allLinks = document.querySelectorAll('a');
allLinks.forEach(linkElement => {
  console.log(linkElement.getAttribute('href'));
  linkElement.setAttribute('href', 'http://wwww.discoveryvip.com');
});

//Overrides ahref
const allListItems = document.querySelectorAll('li');
allListItems.forEach((item, index) => {
  item.textContent = "list item #" + index;
  item.id = "li" + index;
});

const divToRemove = document.querySelector('.pickme');
divToRemove.remove();

/*Challenge 4:
- Loop through all list items and toggle class of test1
- remove class of test2 and replace class text with test3
- add class of test4
- set innerText of className if class initially exists
*/

const listItemsToAddClass = document.querySelectorAll('li');
listItemsToAddClass.forEach((element, index) => {
  console.log(element.className);
  element.textContent = element.className ? element.className : 'No class';
  element.classList.add('test4');
  element.classList.add('test2');
  element.classList.toggle('test1');
  element.classList.remove('test1');
  element.classList.replace('test2', 'test3');
});

/*Challenge 5: Select some elements, navigate to siblings and output element to console
*/

const element = document.querySelector('.pickme');
console.dir(element);
// gives nodelist
console.log(element.childNodes);
// gives HTMLCollection
console.log(element.children);

// children only works with for loop
for(let i = 0; i < element.children.length; i++) {
  console.log(element.children[i].textContent);
  console.log(element.children[i]);
}
console.log(element.childNodes);
console.log(element.parentElement);
console.log(element.parentNode);
console.log(element.nextElementSibling);

/*Challenge 6: style updates: Select some elements and update styles*/

const header = document.getElementsByClassName('list-item');
let itemToUpdate = header[1];
itemToUpdate.style.backgroundColor = 'green';
itemToUpdate.style.color = 'red';
itemToUpdate.style.fontSize = '46px';
itemToUpdate.style.display = 'block';

/* Challenge 7:
*/

const div = document.createElement('div');
div.id = 'new-div-added';
div.style.backgroundColor = 'pink';
div.textContent = 'Hello there';
document.body.appendChild(div);

// I can add padding, font-size etc.
// I can insert elements before or after using document.body.insertBefore etc.
const headerForList = document.createElement('h1');
const textInside = document.createTextNode('Hello header');
headerForList.style.color = 'blue';
headerForList.appendChild(textInside);
document.body.appendChild(headerForList);


/* Challenge 8: event listeners:
- Add ability to click on elements with class = list-item
- Toggle class to red
*/

// Refresher
const containerDiv = document.getElementById('challenge-five');
containerDiv.addEventListener('click', () => {
 console.log('click');
});

//Other way is to use event listener is to create a function and add it in
containerDiv.addEventListener('click', myClickFunction);

function myClickFunction() {
  console.log('clicked')
}

// Challenge
const itemsToClickOn = document.querySelectorAll('.fruits');
for(let i = 0; i < itemsToClickOn.length; i++) {
  itemsToClickOn[i].style.backgroundColor = 'yellow';
  itemsToClickOn[i].style.padding = '26px';
  itemsToClickOn[i].addEventListener('click', makeListItemsRed);
}
function makeListItemsRed() {
  let toggle = this.classList.toggle('red');
  console.log(toggle);
}

/*Challenge 9:
- Add a popup image when any image on the page is clicked
- Popup should show the full size image from the weblink
*/

// Select all images on page
const imageList = document.querySelectorAll("img");
// Loop through and add event listener on each element
// Can create named function or use anonymose
for(let i = 0; i < imageList.length; i++) {
  imageList[i].addEventListener('click', function() {
    // Src gives path to where image is located
    // I can use this in window.open to create the popup
    // All these params are regular for popup window
    window.open(this.src, "myImg", "resizable=yes, width=500, height=500");
  });
}
/*Could have also use onClick to directly apply event listener to the element
although this is not supported in all browsers. I can't as easily remove it either as I can
when I use addEventListener. They do work the same way.

Ex: after loop:
  imageList[i].onClick = function() {
    window.open(this.src, "myImg", "resizable=yes, width=500, height=500");
  });
*/

/*Challenge 10:
  - Show a list of items and give the ability to add new items to list
    by submitting content from an input form.
  - Bonus if I can check that the input field has content with length of more than 3 characters
*/

const showsAndMoviesList = document.querySelector('ul');
const inputForMoviesList = document.querySelector('input');
const showsAndMoviesButton = document.querySelector('button');

// When button is clicked, create a new element and append to the list with contents of input
showsAndMoviesButton.addEventListener('click', function() {
  if (inputForMoviesList.value.length > 3) {
    let listItem = document.createElement('li');
    // value of text node comes from input
    let textForListItem = document.createTextNode(inputForMoviesList.value);
    listItem.appendChild(textForListItem);
    showsAndMoviesList.appendChild(listItem);
  }
});

/*Challenge 11: Background color changer:
  - Add a button that will change body background color
  - Clicking on button will change body background
*/

// Need random num first and then to get usable number, muliply random by num I want to use
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const changeColorButton = document.querySelector('.change-color-button');
changeColorButton.addEventListener('click', function() {
  // Random color value
 let newColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
 document.body.style.backgroundColor = newColor;
});

/* Challenge 12: Any div that gets clicked will
change its background color. Bonus is to update text color as well randomly on click*/


const divs = document.querySelectorAll('div');
divs.forEach((div, index) => {
  console.log(div);
  div.style.padding = '35px';
  div.style.border = '1px solid black';
  div.style.display = 'block';
  div.addEventListener('click', function(e) {
    console.log(e);
    e.target.style.backgroundColor = randomColor();
  });
});

function randomColor() {
  return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
}
function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}

/* Key Press Listeners
Set up keys object
This can be black and then I can use add event listener on document
*/
let keys = {};

document.addEventListener("keydown", pressKeyOn);
document.addEventListener("keyup", pressKeyOff);

function pressKeyOn(event){
  console.dir(event.key);
  console.dir(event);
  event.preventDefault();
  keys[event.key] = true;
  console.log(keys);

}

function pressKeyOff(event) {
  console.dir(event.key);
  keys[event.key] = false;
  console.log(keys);
}


// I can of course track what is happening with input element
const input = document.querySelector('input');
input.addEventListener('keypress', addItem);

function addItem(event) {
  console.log(event);
  document.querySelector('.challenge-title').textContent = input.value;
  if (input.value.length > 5) {
    input.style.backgroundColor = 'red';
  } else {
    input.style.backgroundColor = 'white';
  }
  if(event.keyCode === 13 && input.value.length > 1) {
    document.querySelector('.challenge-title').style.backgroundColor = 'yellow';
  }
}

/*Challenge 13:
 - Add to an element all keys that get pressed
 - I can just append a div with new content.
 - I will track event and event key code.
 */