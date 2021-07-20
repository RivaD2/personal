# Stats

**Purpose of Stats App:**

- To take CSV data and load up all data into node.js app (this involves using Node.js to read the file (fs module).
- Making the data reusable rather than hardcoded by creating a CsvFileReader class
- Parse the data into some usable data structure. The data is an array of strings, so I have to change the data to some appropriate value.
- Update the types that these different values will be stored as in data array/ update the type definition inside the `CsvFileReader` class
- Run a statistical analysis on it and generate a report

**Tools Used:**

- nodemon (executes code once compiled)
- concurrently (helps run multiple scripts at one time)
- @types/node (Type Definitions for Node.js)

**How to use Stats:**

- Run `npm i` to install all dependencies
