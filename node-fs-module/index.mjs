
import { readFile, writeFile } from 'fs/promises';

/*
readFile takes args:
   - Absolute path to file to read but we can use the URL object.
     - URL object takes in the file name to read, and then the base of where I am loading file
     - import.meta.url just gives me the path to file
  - encoding

- First I need to read contents of file asynchronously
  - If no encoding is specified according to Node docs, I will get Buffer obj
  - I will most likely need to turn data into string with Buffer obj
- To do this I can take two approaches:
   - I can call toString() method on file (buffer has toString() on it)
   - Or I can just pass in the encoding directly as an additional arg
- Then once I read the file, the file is now a string inside memory
- Next I process it by replacing values
  - I could use regex or template language
  - I can loop instead and do this using for of loop
  - Grab key and value of each key value pair and replace the placeholder
  text with the new values
- Write the file back to the disc so it can load in browser
*/


let templateFileToRead = await readFile(new URL('template.html', import.meta.url), 'utf-8');
console.log(templateFileToRead);

const templateFileData = {
  header: 'What is the FS module in Node?',
  content: "FS module is a way to interact with the file system on our OS"
}

for (const [key, value] of Object.entries(templateFileData)) {
  templateFileToRead = templateFileToRead.replace(`{${key}}`, value);
  console.log(templateFileToRead);
}

