
// Grab table, tableHeader and plantForm
const table = document.getElementById('table');
const tableHeader = document.getElementById('table-header');
const plantForm = document.querySelector('.plant-form');

// Create tableBody
const tableBody = document.createElement('tbody');
tableBody.classList = 'table-body';
table.append(tableBody);

// Event listener
plantForm.addEventListener('submit', addRow);

// Adds rows to table using Plant class
function addRow(event) {
  event.preventDefault();
  const [plantFormName, plantFormType, plantFormCost] = [...plantForm.elements].slice(0, 3);
  const newPlant = new Plant(plantFormName.value, plantFormType.value, plantFormCost.value);

  tableBody.append(newPlant.renderRow());
}
















