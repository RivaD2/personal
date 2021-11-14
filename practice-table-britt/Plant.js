// Plant class (could be generic name (Product))
class Plant {
  // User inputs
  constructor(name, type, cost) {
    this.name = name,
    this.type = type,
    this.cost = cost
  }

  renderRow() {
     // Create TableRow
     const tableBodyRow = document.createElement('tr');
     tableBodyRow.classList = 'table-body-rows';

     tableBodyRow.append(this.generateTableData(this.name));
     tableBodyRow.append(this.generateTableData(this.type));
     tableBodyRow.append(this.generateTableData(this.cost));
     tableBodyRow.append(this.generateRemoveRowButton(tableBodyRow));
     return tableBodyRow;
  }

  generateTableData(value) {
    // Passed in value from any input
    const tableBodyData = document.createElement('td');
    tableBodyData.classList = 'table-body-data';
    const tableBodyText = document.createTextNode(value);

    tableBodyData.append(tableBodyText);
    return tableBodyData;
  }

  generateRemoveRowButton(tableBodyRow) {
    const buttonData = document.createElement('td');
    const innerText = 'X';

    const removeRowButtonText = document.createTextNode(innerText);
    const removeRowButton = document.createElement('button');
    removeRowButton.classList = 'remove-button'
    removeRowButton.append(removeRowButtonText);
    removeRowButton.onclick =  () => tableBodyRow.remove();

    buttonData.append(removeRowButton);
    return buttonData;
  }
}
