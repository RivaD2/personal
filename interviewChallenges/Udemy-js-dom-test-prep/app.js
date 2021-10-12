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

// Review # 3 Element Manipulation