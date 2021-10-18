/*

1. Grab calc display
2. Grab buttons/children from calc button container
3. Add event listeners to button/children
4. Find out which element/button was clicked on using e.target.innerText
5. Loop over children (using map or forEach)
6. ForEach button addEventListener
  - create a variable for the current button clicked on/grab value (e.target.innerHtml)
  - Can use switch statement here
  - if Clear is clicked, I need to set innerText as empty string
  - If backarrow is clicked, use slice() to remove last character from string
7. When someone enters and invalid operation/calculation, throw error

*/

let calcDisplay = document.getElementById('calc-display');
console.dir(calcDisplay);

// Credit to Dev.to for helping with avoiding using eval() due to security risks
// Demo used eval() :(
const parseValue = str => {
  return Function(`return ${str}`)();
}

const calcButtonContainer = document.querySelector('.calc-button-container');
const calcButtonChildren = Array.from(calcButtonContainer.children);
calcButtonChildren.map(button => {
  button.addEventListener('click', e => {
    let currentButtonClicked = e.target.innerText;
    switch(currentButtonClicked) {
      case 'C':
        calcDisplay.innerText = '';
        break;
      case '←':
        if(calcDisplay.innerText) {
          calcDisplay.innerText = calcDisplay.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          const output = calcDisplay.innerText;
          parseValue(output);
        } catch (error) {
          calcDisplay = calcDisplay.innerText = "Error!"
        }
        break;
      default:
        calcDisplay.innerText += currentButtonClicked;
    }
  });
});