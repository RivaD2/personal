// Practice using XML and building dynamic table
// Credit to Angela Holden/Youtube/How to Build a Dynamic Table with Vanilla JS/XML :)

function dataForTable() {
  // 1: Make request and grab user data
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.onload = () => {
    const response = request.response;
    // This parsedUserData returns 10 objects
    const parseUserData = JSON.parse(response);

    // Keys will populate header of table
    const keys = Object.keys(parseUserData[0]).splice(1, 5);

    // 2: Loop through array and get individual key value
    // Make new array out of HTML elements that include key value from loop
    const newHeaderItems = [];
    keys.forEach(key => {
      // insert markup for each th
      newHeaderItems.push(`<th scope=\"col\">${key}</th>`);
    });

    //3: Need dynamic table data so create another new array.
    // Take parsedUserData and iterate. Push all markup needed
    // into new array.
    let bodyItems = [];
    parseUserData.forEach(data => {
      bodyItems.push(`
        <tr>
          <th data-label="Name" class="th-data" scope="row">${data.name}</th>
          <td data-label="Username" class="th-data">${data.username}</td>
          <td data-label="Email" class="th-data">${data.email}</td>
          <td data-label="Address class="th-data">
            <div class="th-data">${data.address.street}, ${data.address.suite}</div>
            <div class="th-data">${data.address.city}</div>
            <div class="th-data">${data.address.zipcode}</div>
          </td>
          <td data-label="Phone" class="th-data">${data.phone}</td>
        </tr>
      `)
    });

    // 4. Define variables for table, table rows, and table body (grab from HTML)
    const table = document.querySelector('.dynamic-table');
    const tableRows = document.getElementById('table-rows');
    // Take body data and insert into page
    const tableBody = document.getElementById('table-body');

    // 5. If table exists, target innerHTML for table rows and table body and set
    // it equal to the new header items and body items
    if (table) {
      tableRows.innerHTML = newHeaderItems.join(" ");
      tableBody.innerHTML = bodyItems.join(" ");
    }
  }
  request.send();
}

// Once browser window loads, dataForTable() will run
window.onload = () => {
  dataForTable();
}