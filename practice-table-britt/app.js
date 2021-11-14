
// Grab Table and Header
const table = document.getElementById('table');
const tableHeader = document.getElementById('table-header');

// Create TableBody
const tableBody = document.createElement('tbody');
tableBody.classList = 'table-body';
table.append(tableBody);

// Adds rows to table
function addRow() {
  const plantForm = document.querySelector('.plant-form');

  plantForm.addEventListener('submit', e => {
    e.preventDefault();

    // Create TableRow
    const tableBodyRow = document.createElement('tr');
    tableBodyRow.classList = 'table-body-rows';

    // Removal button input because I just need input values for plant data
    const plantFormElements = [...plantForm.elements].slice(0, 3);

    plantFormElements.forEach(element => {
      const plantFormValue = element.value;

      const tableBodyData = document.createElement('td');
      tableBodyData.classList = 'table-body-data';
      const tableBodyText = document.createTextNode(plantFormValue);

      tableBodyData.append(tableBodyText);
      tableBodyRow.append(tableBodyData);
    });

    const buttonData = document.createElement('td');
    const innerText = 'X';

    const removeRowButtonText = document.createTextNode(innerText);
    const removeRowButton = document.createElement('button');
    removeRowButton.classList = 'remove-button'
    removeRowButton.append(removeRowButtonText);

    buttonData.append(removeRowButton);
    tableBodyRow.appendChild(buttonData);
    tableBody.append(tableBodyRow);
  });
}

addRow();


// function removeRow(e) {
//   const removeRowButton = document.querySelector('.remove-button');
//   if(removeRowButton) {
//     removeRowButton.addEventListener('click', e => {
//       const removeRow = e.target;

//     });
//   }
// }
// removeRow();


// function updateRow(tableBodyRow) {

// }














