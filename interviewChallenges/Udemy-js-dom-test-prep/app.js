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
